/**
 * Absolute URL for a file in `public/`, resolved against the origin of the deploy that is
 * actually being built.
 *
 * Open Graph and similar meta tags need absolute URLs, but the correct origin differs per
 * deploy: angelxehg.com on GitHub Pages (production), a `deploy-preview-*.netlify.app`
 * host on a Netlify Deploy Preview. Hardcoding the production domain is what made preview
 * share cards render production's image — so route every absolute asset URL through here
 * and let `astro.config.mjs` decide the origin once.
 *
 * @param path Root-relative path to the asset, e.g. `/images/og.image.png`.
 * @param site Pass `Astro.site` from a layout or page.
 */
export function assetUrl(path: string, site: URL | undefined): string {
  if (!site) {
    // Astro.site is only undefined when `site` is missing from astro.config.mjs. Absolute
    // URLs cannot be built without it, and silently emitting a relative one would produce
    // an og:image that no scraper can fetch.
    throw new Error(
      `Cannot build an absolute URL for ${path}: Astro.site is undefined. ` +
        'Set `site` in astro.config.mjs.',
    );
  }

  return new URL(path, site).href;
}
