import { createHash } from 'node:crypto';

/**
 * The homepage manifest: the Dockerfile that is the bio, plus the resource
 * tiles its layers provision. This module is the single source of truth for
 * both — a layer declares what it provides, and `getManifest()` refuses to
 * build if that mapping is broken.
 *
 * Server-only. It is imported by `src/pages/index.astro`, never by a Vue
 * component, so `node:crypto` stays out of the client bundle.
 */

export type ResourceStatus = 'operational' | 'deploying';

export interface Resource {
  id: string;
  title: string;
  items: string[];
  status: ResourceStatus;
}

export interface Layer {
  instruction: string;
  /** Everything after the instruction; double-quoted runs are highlighted. */
  args: string;
  /** Trailing `# comment`, rendered gray. */
  comment?: string;
  /** Makes this layer's quoted token a link — the manifest's one reachable path. */
  href?: string;
  /** Resource ids this layer provisions. Layers that provide get a `--->` line. */
  provides?: string[];
  /** Authored duration; paces the client-side build sequence. */
  ms: number;
  /** Chained content hash of the layer. Derived, not authored. */
  digest: string;
}

type LayerSource = Omit<Layer, 'digest'>;

// "deploying" is deliberately honest: infra/AWS is a strong interest, not a
// claim of production mastery — so it reads amber, not green.
const resources: Resource[] = [
  { id: 'compute/backend', title: 'Backend', items: ['Python', 'Django', 'FastAPI'], status: 'operational' },
  { id: 'queue/workers', title: 'Workers', items: ['Celery', 'TaskIQ'], status: 'operational' },
  { id: 'iac/infrastructure', title: 'Infrastructure', items: ['AWS', 'IaC', 'Linux', 'Docker'], status: 'deploying' },
  { id: 'edge/frontend', title: 'Frontend', items: ['Astro', 'Tailwind', 'Vue'], status: 'operational' },
];

// Durations are authored, not measured — they pace the sequence so it reads
// staccato (~1.7s total) rather than metronomic. A pip install should visibly
// cost more than a LABEL.
const layers: LayerSource[] = [
  { instruction: 'FROM', args: 'mexico:latest', ms: 320 },
  { instruction: 'LABEL', args: 'role="Backend Developer"', ms: 40 },
  { instruction: 'LABEL', args: 'langs="es-MX (native) · en (professional)"', ms: 40 },
  {
    instruction: 'RUN',
    args: 'pip install django fastapi celery taskiq',
    provides: ['compute/backend', 'queue/workers'],
    ms: 620,
  },
  {
    instruction: 'ENV',
    args: 'FOCUS="apis · iac · aws · performance"',
    provides: ['iac/infrastructure'],
    ms: 60,
  },
  {
    instruction: 'COPY',
    args: './frontend ./',
    comment: '# astro · tailwind · vue',
    provides: ['edge/frontend'],
    ms: 380,
  },
  // Everything above is a frozen layer; the blog is the one part that is still
  // being written, so it mounts as the image's only writable volume. The path
  // is a real link.
  {
    instruction: 'VOLUME',
    args: '["/blog"]',
    comment: '# the only mutable layer',
    href: '/blog/',
    ms: 40,
  },
  { instruction: 'EXPOSE', args: '443', ms: 40 },
  // Describes what the island actually does: a real same-origin probe on this
  // interval. `localhost:443` is the port EXPOSE just declared.
  { instruction: 'HEALTHCHECK', args: '--interval=30s CMD curl -f localhost:443', ms: 90 },
  // Not "--zero-javascript" any more: this page is the site's only island.
  { instruction: 'CMD', args: '["ship", "--islands=1"]', ms: 60 },
];

/** Chain each layer's digest off its parent, the way a real image does. */
function withDigests(source: LayerSource[]): Layer[] {
  let parent = '';
  return source.map((layer) => {
    parent = createHash('sha256')
      .update(`${parent}\n${layer.instruction} ${layer.args}`)
      .digest('hex')
      .slice(0, 12);
    return { ...layer, digest: parent };
  });
}

/**
 * Assert the layer -> tile mapping in both directions. A typo'd id or a tile
 * nobody provisions would otherwise ship as a card that silently never
 * finishes lighting up, which is exactly the failure this feature can't have.
 */
function assertMapping(built: Layer[]): void {
  const known = new Set(resources.map((r) => r.id));
  const seen = new Map<string, string>();

  for (const layer of built) {
    for (const id of layer.provides ?? []) {
      if (!known.has(id)) {
        throw new Error(
          `manifest: layer "${layer.instruction} ${layer.args}" provides unknown resource "${id}"`,
        );
      }
      const owner = seen.get(id);
      if (owner) {
        throw new Error(`manifest: resource "${id}" is provided twice (by ${owner} and ${layer.instruction})`);
      }
      seen.set(id, layer.instruction);
    }
  }

  const orphans = resources.filter((r) => !seen.has(r.id)).map((r) => r.id);
  if (orphans.length) {
    throw new Error(`manifest: no layer provides ${orphans.join(', ')}`);
  }
}

export function getManifest(): { layers: Layer[]; resources: Resource[] } {
  const built = withDigests(layers);
  assertMapping(built);
  return { layers: built, resources };
}
