// Shared between the Astro build (src/lib/devto.ts, the blog pages) and the
// standalone syndication script (scripts/syndicate.mjs), which runs outside
// Vite. Plain .mjs so both can import it without duplicating the URL shape.

export const SITE_URL = 'https://angelxehg.com';

export const BLOG_BASE = '/blog';

/**
 * Canonical URL of a post. The trailing slash is not cosmetic: Astro's
 * directory build format emits /blog/<slug>/, and the canonical_url stored on
 * dev.to has to match what the page itself declares.
 */
export function postUrl(slug) {
  return `${SITE_URL}${BLOG_BASE}/${slug}/`;
}

/**
 * Inverse of postUrl: the slug a dev.to article points back at, or null when
 * the article is not a mirror of a post on this site.
 *
 * Articles published without a canonical report their own dev.to URL here, so
 * everything written before this blog existed simply returns null.
 */
export function slugFromCanonical(url) {
  if (typeof url !== 'string') return null;

  let pathname;
  try {
    const parsed = new URL(url);
    if (`${parsed.protocol}//${parsed.host}` !== SITE_URL) return null;
    pathname = parsed.pathname;
  } catch {
    return null;
  }

  const prefix = `${BLOG_BASE}/`;
  if (!pathname.startsWith(prefix)) return null;

  // Tolerate a hand-edited canonical that lost or gained its trailing slash.
  // Nested slugs are kept: the collection globs **/*.md, so a post in a
  // subdirectory has an id containing a slash and postUrl() round-trips it.
  const slug = pathname.slice(prefix.length).replace(/\/+$/, '');
  return slug || null;
}
