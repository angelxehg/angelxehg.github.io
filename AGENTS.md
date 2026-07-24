# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio (angelxehg.com) built with Astro 7 + Vue 3 + Tailwind CSS 4, exported as a fully static site. There is no backend, no test suite, and no linter configured.

## Commands

```shell
npm install        # install dependencies
npm run dev        # dev server on http://localhost:4321
npm run build      # static export to dist/ (this is what CI/Netlify run and deploy)
npm run preview    # serve the production build locally
```

`npm run build` is the deployed command — it writes the static site to `dist/`.

## Node version

Node 24.18.0 (current LTS) is pinned in **two** places that must be bumped together:

- `package.json` → `volta.node` — what Volta installs and activates locally
- `.node-version` — what Netlify and the GitHub Actions workflow (`node-version-file`) read

Volta does not read `.node-version`, and Netlify does not read the `volta` field, which is why both exist. (Astro 7 itself only requires Node >= 22.12.)

## Static export details

`astro build` writes the static site to `dist/` (gitignored). `src/pages/404.astro` builds straight to `dist/404.html`, which GitHub Pages serves for unmatched routes — no post-build rename is needed.

**`ProfileCard` on the homepage is the site's only island** (`client:load` in `src/pages/index.astro`). Every other Vue component is used **without a `client:*` directive**, so it renders to static HTML and `/blog`, `/blog/*` and `/404` ship **no client-side JS** — keep it that way. Anything needing runtime interactivity on those pages (event handlers, reactive state, client-only composables) will not work unless a client directive is added, which is a decision rather than a detail.

The homepage island is strictly an enhancement over markup that is already complete: see *Homepage build sequence*.

## Deployment

Two targets build from the same source:

- **GitHub Pages** (primary) — `.github/workflows/astro.yml` on push to `main`, uploads `./dist`. `public/CNAME` binds the custom domain angelxehg.com.
- **Netlify** (preview/mirror) — `netlify.toml`, publishes `dist`. When the `NETLIFY` env var is set (only on Netlify), `astro.config.mjs` flips the `robots.txt` policy to `Disallow: /` and the layout's `robots` meta to `noindex, nofollow`, so only the Pages deploy is crawled.

## Structure and conventions

- Astro is the shell/routing language; Vue holds the markup. `src/layouts/Base.astro` is the `<html>`/`<head>`/`<body>` shell (imports `src/styles/global.css`). `src/pages/index.astro` and `src/pages/404.astro` are thin wrappers around Vue components.
- `src/components/ProfileCard.vue` is the homepage; `src/components/NotFoundCard.vue` is the 404 card; `src/components/blog/` holds the blog. All include `SiteFooter.vue`. There is no separate error page — a static host only reaches the 404.
- Per-page `<head>` is set by passing props to `Base.astro` (`title`, `description`, `canonical`, `image`, `type`, `publishedTime`); the layout centralizes the shared meta (OG tags, `google-site-verification`, favicon, `robots`). `canonical` always resolves against `site`, so the Netlify preview points at the production URL rather than at itself.
- Tailwind 4 is wired through the Vite plugin in `astro.config.mjs`. `src/styles/global.css` holds `@import "tailwindcss"`, the `.post-body` Markdown typography rules, and the Shiki dark-mode variable swap. Theme customization belongs there via `@theme`.
- Dark mode is `dark:` variants driven by `prefers-color-scheme`; there is no theme toggle.

## Homepage build sequence

The Dockerfile on the homepage is not decoration — it is the **cause** of the resources grid below
it. `src/lib/manifest.ts` is the single source of truth for both: it owns the `layers` array and the
`resources` array, chains a real `sha256` digest per layer, and **fails the build** if the mapping
between them breaks (an unknown id in `provides`, a resource provided twice, or a tile nobody
provisions). It is server-only — imported by `src/pages/index.astro`, never by a Vue component, so
`node:crypto` stays out of the client bundle. Editing the bio means editing that file, not markup.

One rule governs the whole feature: **the DOM is always the finished state.** The HTML that ships is
the complete, correct card; "building" is expressed purely as opacity, saturation and color. No
state may change text or any layout property — annotation lines occupy their line box while
invisible, so nothing reflows and the accessibility tree never changes. A crawler, a screen reader,
or a browser where the island never boots gets the finished card and nothing else. If you add to
this sequence, keep that property; it is what makes an animated build safe on a hiring surface.

Details worth not re-deriving:

- The sequence auto-plays **once per session** (`sessionStorage['ax:build']`), and not at all under
  `prefers-reduced-motion: reduce`. Pacing comes from each layer's authored `ms`, so tuning the feel
  is a data edit.
- `HEALTHCHECK` is **real**. The island probes `/favicon.ico` same-origin on the 30s interval the
  manifest line advertises, only while the tab is visible, and reports the page's own actual
  reachability (`res.ok`, matching `curl -f`). Nothing about it is simulated — do not replace it
  with a fake timer.
- Uptime is docker's `HumanDuration` format (`Up 6 days`), which is only correct at *view* time. The
  server therefore ships an absolute `<time datetime>` reading `up since <date>`, and the island
  rewrites it into the relative form. Both are true; the conversion is what the uptime JS is for.
- Inside the manifest `<pre>`, Vue preserves whitespace verbatim (the compiler's `condense` mode does
  not apply in `pre`). Every line is therefore a `display: block` span with **no whitespace between
  sibling tags** — keep `>` and `<` adjacent when editing that template or you will render blank
  lines.
- `CMD ["ship", "--islands=1"]` is a checkable claim: it is true only while the homepage is the sole
  island. Add another and that line becomes a lie.

## Blog

Posts are Markdown in `src/content/blog/*.md`, declared by the `blog` collection in
`src/content.config.ts`. Frontmatter: `title`, `description`, `date` (required); `updated`, `tags`,
`image`, `draft`, `syndicate` (optional). `image` is a site-absolute path and doubles as the OG card
and the dev.to cover. Drafts render in `astro dev` and are dropped from every real build
(`src/lib/posts.ts`).

The blog is styled as a full-bleed terminal — `src/components/blog/TerminalShell.vue` (status bar +
`<slot />`), `PostList.vue` (an `ls -lh` listing where the size column is the real byte count of the
Markdown), `PostMeta.vue` (`$ cat <slug>.md`). It deliberately does **not** extend the homepage's
Dockerfile conceit. Routes are `src/pages/blog/index.astro` and `src/pages/blog/[...slug].astro`.

**Authoring rule:** images and assets inside post Markdown must be absolute URLs. Relative paths
resolve here and break on the dev.to copy.

## dev.to syndication

This site is canonical; dev.to is a mirror. Both directions are stateless — no article ids or sync
files are stored in the repo, and `canonical_url` is the only join key. `src/lib/site.mjs` owns that
URL shape (`postUrl` / `slugFromCanonical`) and is plain `.mjs` because both the Vite build and the
standalone script import it.

- **Read (every build):** `src/lib/devto.ts` fetches the public article list and keeps entries whose
  `canonical_url` points at a post here, so the "↗ dev.to" link appears only for real mirrors. Posts
  published without a canonical report their own dev.to URL, which is why the pre-blog articles are
  excluded automatically. Every failure path returns an empty map — set `SKIP_DEVTO=1` to skip the
  fetch entirely. **A dev.to outage must never fail a build; keep it that way.**
- **Write (merge to main):** the `syndicate` job in `.github/workflows/astro.yml` runs
  `npm run syndicate` after the Pages deploy. `scripts/syndicate.mjs` pushes only posts with
  `syndicate: true`, looks up `/articles/me/all`, and `PUT`s when some article already claims the
  post's canonical URL or `POST`s when none does. Unchanged content is skipped so unrelated pushes
  don't bump `edited_at`. Needs the `DEVTO_API_KEY` repository secret; without it the script warns
  and exits 0. Use `node scripts/syndicate.mjs --dry-run` to preview.

## SEO files

- `robots.txt` is generated at build time by the `astro-robots` integration, configured in `astro.config.mjs`. Do not add a plain `public/robots.txt`.
- The sitemap (`sitemap-index.xml` + `sitemap-0.xml`) is generated by `@astrojs/sitemap` from the route list, with `/404` filtered out. `site: 'https://angelxehg.com'` in `astro.config.mjs` supplies the absolute URLs. Adding a route updates the sitemap automatically — no manual XML editing.
