# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio (angelxehg.com) built with Nuxt 4 + Vue 3 + Tailwind CSS 4, exported as a fully static site. There is no backend, no test suite, and no linter configured.

## Commands

```shell
npm install        # postinstall runs `nuxt prepare` to regenerate .nuxt/ types
npm run dev        # dev server on http://localhost:3000
npm run generate   # static export (this is what CI/Netlify run)
npm run preview    # serve the production build locally
npx nuxt analyze   # bundle size analysis
```

`npm run build` produces a Nitro server build and is *not* what gets deployed — always use `generate` when verifying deploy behavior.

## Node version

Node 24.18.0 (current LTS) is pinned in **two** places that must be bumped together:

- `package.json` → `volta.node` — what Volta installs and activates locally
- `.node-version` — what Netlify and the GitHub Actions workflow (`node-version-file`) read

Volta does not read `.node-version`, and Netlify does not read the `volta` field, which is why both exist.

## Static export details

`nuxt generate` writes to `.output/public` and creates a `dist` symlink pointing at it (both are gitignored). The `postgenerate` script then rewrites `dist/404/index.html` into `dist/404.html`, because GitHub Pages serves `404.html` for unmatched routes but Nuxt prerenders the `/404` route into a directory. Any change to routing, the 404 page, or the output directory must keep that rename valid.

Routes are prerendered with `noScripts: true` (see `routeRules` in `nuxt.config.ts`), so the shipped pages have **no client-side JS**. Anything requiring runtime interactivity (event handlers, reactive state, client-only composables) will silently not work unless `noScripts` is removed for that route.

## Deployment

Two targets build from the same source:

- **GitHub Pages** (primary) — `.github/workflows/nuxtjs.yml` on push to `main`, uploads `./dist`. `public/CNAME` binds the custom domain angelxehg.com.
- **Netlify** (preview/mirror) — `netlify.toml`, publishes `.output/public`. `nuxt.config.ts` sets `site.indexable: !process.env.NETLIFY` so the Netlify copy is marked non-indexable and only the Pages deploy is crawled.

## Structure and conventions

- `app/` is the Nuxt 4 srcDir. `app/pages/index.vue` is essentially the whole site; `app/pages/404.vue` and `app/error.vue` are near-duplicate error screens (keep them in sync when styling changes).
- Per-page `<head>` is set with `useHead()` inside each page — there is no global head config, so new pages need their own title/meta.
- Tailwind 4 is wired through the Vite plugin, with `app/assets/css/main.css` containing only `@import "tailwindcss"`. **`tailwind.config.ts` is vestigial** — it is CJS, uses pre-`app/` content globs, and is not referenced by the v4 setup. Theme customization belongs in `main.css` via `@theme`, not in that file.
- Dark mode is `dark:` variants driven by `prefers-color-scheme`; there is no theme toggle.

## SEO files

- `public/_robots.txt` is a source file merged by `@nuxtjs/robots` into the generated `robots.txt` — don't create a plain `public/robots.txt`.
- `public/sitemap-index.xml` and `public/sitemap-0.xml` are **hand-written** (no sitemap module is installed). Adding a route means editing them manually.
