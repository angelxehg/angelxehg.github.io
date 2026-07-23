// https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';
import tailwindcss from '@tailwindcss/vite';

// Only the GitHub Pages deploy should be crawlable; the Netlify mirror is not.
const indexable = !process.env.NETLIFY;

export default defineConfig({
  site: 'https://angelxehg.com',
  integrations: [
    vue(),
    sitemap({ filter: (page) => !page.includes('/404') }),
    robots({
      sitemap: indexable ? ['https://angelxehg.com/sitemap-index.xml'] : false,
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
