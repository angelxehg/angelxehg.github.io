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

### Absolute URLs must follow the deploy, not the domain

`site` in `astro.config.mjs` is resolved per environment, not hardcoded: `angelxehg.com` on GitHub Pages, and Netlify's own `DEPLOY_PRIME_URL` (falling back to `DEPLOY_URL`, then `URL`) on Netlify. `DEPLOY_PRIME_URL` is preferred because it is stable per PR — `DEPLOY_URL` carries a per-build deploy id and changes on every rebuild, which would invalidate any share card a scraper already cached.

This matters because `site` feeds every absolute URL Astro emits. When it was hardcoded, Deploy Previews advertised production's `og:image`, so a preview's share card showed the live site's picture.

**Build absolute asset URLs with `assetUrl(path, Astro.site)` from `src/lib/siteUrl.ts`** — never by writing the domain out. If a Netlify build somehow has none of the three URL variables, the config throws rather than falling back to the production domain, since a silent fallback is exactly the bug being prevented.

## Structure and conventions

- Astro is the shell/routing language; Vue holds the markup. `src/layouts/Base.astro` is the `<html>`/`<head>`/`<body>` shell (imports `src/styles/global.css`). `src/pages/index.astro` and `src/pages/404.astro` are thin wrappers around Vue components.
- `src/components/ProfileCard.vue` is the homepage; `src/components/NotFoundCard.vue` is the 404 card; `src/components/blog/` holds the blog. All include `SiteFooter.vue`. There is no separate error page — a static host only reaches the 404.
- Per-page `<head>` is set by passing props to `Base.astro` (`title`, `description`, `image`, `type`, `publishedTime`); the layout centralizes the shared meta (canonical, OG tags, `google-site-verification`, favicon, `robots`). The canonical link is derived from `Astro.url.pathname` against `Astro.site`, so every page is its own canonical on whichever origin built it — see *Absolute URLs must follow the deploy, not the domain*.
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
`image`, `draft` (optional). `image` is a site-absolute path and overrides the default OG card for
that post. Drafts render in `astro dev` and are dropped from every real build (`src/lib/posts.ts`).

**Posts are named `YYYY-MM-DD-<slug>.md`, and the date prefix is part of the URL** — the glob
loader derives the collection id from the filename, so `2026-08-03-no-javascript-blog.md` is served
at `/blog/2026-08-03-no-javascript-blog/`. That makes the filename permanent once a post is public:
renaming it changes the URL. It also means the filename's date and the `date` frontmatter are two
independent copies of the same fact, so `assertDatedFilename` in `src/lib/posts.ts` **fails the
build** when they disagree or when the prefix is missing. Fix the mismatch; do not relax the check.

The blog is styled as a full-bleed terminal — `src/components/blog/TerminalShell.vue` (status bar +
`<slot />`), `PostList.vue` (an `ls -lh` listing where the size column is the real byte count of the
Markdown), `PostMeta.vue` (`$ cat <slug>.md`). It deliberately does **not** extend the homepage's
Dockerfile conceit. Routes are `src/pages/blog/index.astro` and `src/pages/blog/[...slug].astro`.

**The blog is built entirely at build time and has no network dependency.** Everything a post page
needs comes from the repo: the Markdown, the collection schema, `getBuildInfo()`. Nothing is fetched
from a third-party API while building, so a build cannot fail — or hang — because someone else's
service is down. A previous version of this branch called dev.to's API on every build to decorate
posts with mirror links; that is gone, along with the syndication script and its workflow job. If a
future feature wants remote data at build time, treat adding it as a real decision, not a detail.

**Authoring rule:** images and assets inside post Markdown must be absolute URLs (or site-absolute
paths under `public/`), so a post reads the same wherever its HTML is served from.

## Avatar, favicon, and OG image

All three derive from `public/images/avatar.svg`, generated by `npm run avatar:svg` from
the Dicebear config in `scripts/generate-avatar-svg.mjs`, then rasterized by
`npm run avatar:png` (PNG sizes + `favicon.ico`) and `npm run og` (`og.image.png`).

The SVG is committed and may be hand-edited — `npm run avatar:svg` overwrites it, which is
why there is no combined `npm run avatar`. **Read `skills/avatar/SKILL.md` before changing
any of these**; it covers the run order, the hand-edit path, and several failure modes that
are silent rather than loud.

## Skills

Repo-specific agent instructions live in `skills/`. Each tool looks in its own directory,
so all three are symlinks back to that one canonical folder — the same
canonical-file-plus-symlink pattern as `CLAUDE.md` → `AGENTS.md`:

- `.claude/skills` → `../skills` (Claude Code)
- `.junie/skills` → `../skills` (Junie)
- `.agents/skills` → `../skills` (Codex)

Add new skills under `skills/<name>/SKILL.md` only; every tool picks them up through its
symlink, so there is nothing to duplicate.

## SEO files

- `robots.txt` is generated at build time by the `astro-robots` integration, configured in `astro.config.mjs`. Do not add a plain `public/robots.txt`.
- The sitemap (`sitemap-index.xml` + `sitemap-0.xml`) is generated by `@astrojs/sitemap` from the route list, with `/404` filtered out. The per-deploy `site` in `astro.config.mjs` supplies the absolute URLs. Adding a route updates the sitemap automatically — no manual XML editing.
