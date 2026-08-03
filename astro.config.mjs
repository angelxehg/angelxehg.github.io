// https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';
import tailwindcss from '@tailwindcss/vite';

// Production is GitHub Pages (angelxehg.com). Netlify only ever serves Deploy Previews and
// branch mirrors — it is never production.
const PRODUCTION_SITE = 'https://angelxehg.com';

// `site` feeds every absolute URL Astro emits (og:image, the sitemap), so a Netlify build
// that advertises the production domain makes a Deploy Preview's share card point at the
// live site's image instead of its own. Resolve the origin per deploy instead of hardcoding.
//
// Netlify's read-only build vars — https://docs.netlify.com/build/configure-builds/environment-variables/
//   DEPLOY_PRIME_URL  https://deploy-preview-59--<site>.netlify.app  — stable per PR/branch
//   DEPLOY_URL        https://<deploy-id>--<site>.netlify.app        — unique per build
//   URL               the site's main address
// Prefer DEPLOY_PRIME_URL: it survives rebuilds of the same PR, so a share card that a
// scraper cached once stays valid. DEPLOY_URL changes on every rebuild.
const netlifySite = process.env.DEPLOY_PRIME_URL ?? process.env.DEPLOY_URL ?? process.env.URL;

// Fail loudly rather than falling back to the production domain: a silent fallback is
// exactly the bug this resolution exists to prevent, and it would only surface later as a
// preview quietly serving production's images.
if (process.env.NETLIFY && !netlifySite) {
  throw new Error(
    'Building on Netlify but none of DEPLOY_PRIME_URL, DEPLOY_URL or URL is set. ' +
      'Refusing to fall back to ' +
      PRODUCTION_SITE +
      ', which would make this deploy advertise production og:image and sitemap URLs.',
  );
}

const site = process.env.NETLIFY ? netlifySite : PRODUCTION_SITE;

// Only the GitHub Pages deploy should be crawlable; the Netlify mirror is not.
const indexable = !process.env.NETLIFY;

export default defineConfig({
  site,
  integrations: [
    vue(),
    sitemap({ filter: (page) => !page.includes('/404') }),
    robots({
      sitemap: indexable ? [new URL('/sitemap-index.xml', site).href] : false,
      policy: indexable
        ? [{
            userAgent: ['*'],
            allow: ['/'],
            disallow: ['/404', '/about', '/skills', '/projects', '/posts'],
          }]
        : [{ userAgent: ['*'], disallow: ['/'] }],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
