---
title: A blog that ships no JavaScript
description: Markdown in a git repo, rendered to static HTML at build time. No client bundle, no database, no runtime — and a file listing whose numbers are real.
date: 2026-08-03
tags: [astro, performance, static]
---

I write a few posts a year. That rules out most blog tooling, which assumes a
weekly cadence and a database to go with it. What I wanted instead was Markdown
in a git repo, one URL per post, and a page that does nothing at runtime.

## Everything happens at build time

Posts are files under `src/content/blog/`, declared as an Astro content
collection so the frontmatter is type-checked rather than trusted:

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

A missing `description` fails the build instead of shipping a page with no meta
description. Drafts render while I'm writing and are dropped from every real
build, so there is no "publish" step beyond deleting one line.

## No client bundle

The pages are Astro and Vue, but the Vue components carry no `client:*`
directive, so they render to HTML during the build and the runtime never gets
sent. What a browser downloads for a post is markup and one stylesheet — no
hydration, no framework, nothing to execute before the text is readable.

That is a property worth checking rather than believing, and it is easy to
check:

```shell
grep -c '<script' dist/blog/*/index.html
```

Zero. Syntax highlighting is the same story: Shiki runs at build time and emits
both a light and a dark palette inline, and a media query picks one. No
highlighter ships either.

## The listing is a real listing

The index is styled as `ls -lh`, and I did not want the columns to be
decoration. The size next to each post is the actual byte count of the Markdown
file behind it:

```ts
export function byteSize(post: Post): number {
  return Buffer.byteLength(post.body ?? '', 'utf8');
}
```

Small thing. But a fake number in a listing that looks like `ls` is a lie the
page tells every visitor, and the real one cost four lines.
