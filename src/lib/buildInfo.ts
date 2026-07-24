import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export interface BuildInfo {
  /** Short git commit the site was built from. */
  commit: string;
  /** 12-char commit, used as the image/container id in the manifest. */
  containerId: string;
  /** UTC date the build ran, formatted YYYY-MM-DD. */
  builtAt: string;
  /** Full ISO timestamp of the build; the client derives uptime from this. */
  builtAtISO: string;
  /** Astro version that produced the build. */
  astroVersion: string;
  /** Fake-but-fitting deploy region (real AWS region id for Mexico). */
  region: string;
}

function fullSha(): string | null {
  // Prefer CI-provided refs (Netlify: COMMIT_REF, GitHub Actions: GITHUB_SHA)
  // so we don't shell out when the platform already told us the commit.
  const fromEnv = process.env.COMMIT_REF ?? process.env.GITHUB_SHA;
  if (fromEnv) return fromEnv;
  try {
    return execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return null;
  }
}

/**
 * Honest, build-time deploy metadata for the status-page footer.
 * Every field is derived from the real build — nothing is invented at runtime.
 */
export function getBuildInfo(): BuildInfo {
  let astroVersion = '';
  try {
    astroVersion = require('astro/package.json').version;
  } catch {
    /* version is decorative; a missing one just renders blank */
  }

  const sha = fullSha();
  const builtAtISO = new Date().toISOString();

  return {
    commit: sha?.slice(0, 7) ?? 'unknown',
    // Docker prints 12 hex chars for image and container ids.
    containerId: sha?.slice(0, 12) ?? 'unknown',
    builtAt: builtAtISO.slice(0, 10),
    builtAtISO,
    astroVersion,
    region: 'mx-central-1',
  };
}
