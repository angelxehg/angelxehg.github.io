---
title: This blog is canonical, dev.to is a mirror
description: How posts here get pushed to dev.to on merge, and how the site figures out where the mirror lives without storing anything.
date: 2026-07-23
tags: [astro, devto, seo]
syndicate: false
---

I write a few posts a year. That rules out most blog tooling, which assumes a
weekly cadence and a database. What I wanted instead was Markdown in a git
repo, one canonical URL per post, and a copy on dev.to that points home.

## The canonical rule

Every post lives at `https://angelxehg.com/blog/<slug>/` and says so in its own
head:

```html
<link rel="canonical" href="https://angelxehg.com/blog/hello-world/" />
```

The dev.to copy carries the same value in its `canonical_url` field. Search
engines get one answer about which URL is the original, and dev.to renders a
"originally published at" notice above the article.

## Stateless in both directions

Nothing in this repo records what exists on dev.to — no article ids, no sync
lockfile. Both directions rediscover it from the canonical URL instead.

At build time the site reads the public API and keeps whatever points back
here:

```js
const res = await fetch('https://dev.to/api/articles?username=angelxehg');
const mirrors = (await res.json()).filter((article) =>
  article.canonical_url?.startsWith('https://angelxehg.com/blog/'),
);
```

Posts published before this blog existed report their own dev.to URL as the
canonical, so they fall out of that filter on their own.

On merge to `main`, a script does the mirror image of the same lookup against
the authenticated endpoint: if some article already claims a post's canonical
URL, `PUT` it, otherwise `POST` a new one. There is no third case, and no state
to drift out of sync.

## No JavaScript

The pages are Astro and Vue, but the Vue components render at build time with
no client directive, so what ships is HTML and one stylesheet. The `ls -lh`
listing on the index is real: the size column is the byte count of the Markdown
file behind each post.
