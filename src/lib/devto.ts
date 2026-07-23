import { slugFromCanonical } from './site.mjs';

const API = 'https://dev.to/api';
const USERNAME = 'angelxehg';
const TIMEOUT_MS = 10_000;

export interface Mirror {
  /** Canonical dev.to URL of the mirrored copy. */
  url: string;
  publishedAt: string;
}

let pending: Promise<Map<string, Mirror>> | undefined;

/**
 * Slug -> dev.to mirror, discovered at build time.
 *
 * The lookup is stateless: nothing in this repo records what exists on dev.to.
 * We read the public article list and keep only entries whose canonical_url
 * points back at a post here. Articles published without a canonical report
 * their own dev.to URL in that field, so everything written before this blog
 * existed is filtered out by the same rule, with no allowlist to maintain.
 *
 * Mirror links are decorative: a post is complete without one. So every
 * failure path — offline, rate limited, API shape changed — returns an empty
 * map rather than throwing. A dev.to outage must never fail a deploy.
 */
export function getMirrors(): Promise<Map<string, Mirror>> {
  pending ??= fetchMirrors();
  return pending;
}

async function fetchMirrors(): Promise<Map<string, Mirror>> {
  const mirrors = new Map<string, Mirror>();

  if (process.env.SKIP_DEVTO) {
    console.info('[devto] SKIP_DEVTO set — building without mirror links');
    return mirrors;
  }

  try {
    const res = await fetch(`${API}/articles?username=${USERNAME}&per_page=1000`, {
      headers: { accept: 'application/vnd.forem.api-v1+json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!res.ok) {
      console.warn(`[devto] ${res.status} ${res.statusText} — building without mirror links`);
      return mirrors;
    }

    const articles: unknown = await res.json();
    if (!Array.isArray(articles)) return mirrors;

    for (const article of articles) {
      const slug = slugFromCanonical(article?.canonical_url);
      if (!slug || mirrors.has(slug)) continue;
      mirrors.set(slug, {
        url: article.url,
        publishedAt: article.published_at,
      });
    }

    console.info(`[devto] ${mirrors.size} mirrored post(s) found`);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[devto] lookup failed (${reason}) — building without mirror links`);
  }

  return mirrors;
}
