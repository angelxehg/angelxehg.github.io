import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Post filenames are `YYYY-MM-DD-<slug>.md`; the id keeps the whole thing. */
const DATED_ID = /^(\d{4}-\d{2}-\d{2})-.+/;

/**
 * Published posts, newest first. Drafts render in `astro dev` so they can be
 * previewed, and are dropped from every real build.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  posts.forEach(assertDatedFilename);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * The filename's date prefix becomes part of the post's permanent URL, and the
 * `date` frontmatter is what the page displays and sorts by. Nothing links the
 * two, so a typo in either ships a post whose URL contradicts its own byline —
 * and by the time that is noticed the URL is public and no longer free to fix.
 * Fail the build instead, while both are still a rename away from correct.
 */
function assertDatedFilename(post: Post): void {
  const prefix = DATED_ID.exec(post.id)?.[1];

  if (!prefix) {
    throw new Error(
      `Post "${post.id}" is not named YYYY-MM-DD-<slug>.md. ` +
        `Rename it to ${isoDate(post.data.date)}-${post.id}.md.`,
    );
  }

  const declared = isoDate(post.data.date);
  if (prefix !== declared) {
    throw new Error(
      `Post "${post.id}" is dated ${prefix} by its filename but ${declared} by its ` +
        'frontmatter. The filename sets the URL and the frontmatter sets what the page ' +
        'says, so these must agree — fix whichever one is wrong.',
    );
  }
}

/** Raw Markdown byte count — the size column in the `ls` listing is a real one. */
export function byteSize(post: Post): number {
  return Buffer.byteLength(post.body ?? '', 'utf8');
}

/** Human-readable size in the shape `ls -lh` uses. */
export function humanSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  return `${(bytes / 1024).toFixed(1)}K`;
}

/** YYYY-MM-DD in UTC, so the date never shifts with the build machine's zone. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/* -------------------------------------------------------------------------- */
/* Rows                                                                        */
/* -------------------------------------------------------------------------- */

/** A tag as it is rendered: the author's own string, plus where it points. */
export interface TagLink {
  label: string;
  href: string;
}

/**
 * One row of the `ls` listing. Routes hand these to Vue instead of collection
 * entries, so nothing that needs `node:` APIs crosses into a component.
 */
export interface PostRow {
  slug: string;
  title: string;
  description: string;
  date: string;
  size: string;
  tags: TagLink[];
}

export function toRow(post: Post): PostRow {
  return {
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    date: isoDate(post.data.date),
    size: humanSize(byteSize(post)),
    tags: toTagLinks(post.data.tags),
  };
}

/* -------------------------------------------------------------------------- */
/* Tags                                                                        */
/* -------------------------------------------------------------------------- */

/** Tags are free-form strings in frontmatter; this is what makes one a URL. */
export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s/]+/g, '-');
}

export function tagBase(tag: string): string {
  return `/blog/tags/${tagSlug(tag)}/`;
}

export function toTagLinks(tags: string[]): TagLink[] {
  return tags.map((tag) => ({ label: tag, href: tagBase(tag) }));
}

export interface TagSummary extends TagLink {
  slug: string;
  count: number;
  posts: Post[];
}

/**
 * Every tag in use, most-used first. The `posts` array is already newest-first
 * because it inherits `getPosts()`'s order.
 */
export function getTags(posts: Post[]): TagSummary[] {
  const bySlug = new Map<string, TagSummary>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagSlug(tag);
      const existing = bySlug.get(slug);

      if (!existing) {
        bySlug.set(slug, { label: tag, href: tagBase(tag), slug, count: 1, posts: [post] });
        continue;
      }

      assertSameTag(existing.label, tag, slug);
      existing.count += 1;
      existing.posts.push(post);
    }
  }

  return [...bySlug.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/**
 * `React` and `react` are one URL but two labels, and whichever post is read
 * first silently decides which label the page shows. That is the same class of
 * bug `assertDatedFilename` guards: by the time it is noticed the tag URL is
 * public. Fail the build while a frontmatter edit still fixes it for free.
 */
function assertSameTag(existing: string, incoming: string, slug: string): void {
  if (existing === incoming) return;

  throw new Error(
    `Tags "${existing}" and "${incoming}" both become /blog/tags/${slug}/, so one page ` +
      'would have to pick a label for both. Spell them the same way in every post.',
  );
}

/* -------------------------------------------------------------------------- */
/* Pagination                                                                  */
/* -------------------------------------------------------------------------- */

export const PAGE_SIZE = 10;

/**
 * The one place the paged URL shape is written down. Page 1 is the bare
 * listing — `/blog/`, not `/blog/page/1/` — so it has exactly one URL.
 *
 * The literal `page` segment is what keeps these routes unambiguous: post ids
 * are always `YYYY-MM-DD-…`, so `/blog/page/2/` can never be mistaken for a
 * post by the `[...slug]` route next door.
 */
export function pageHref(base: string, page: number): string {
  return page === 1 ? base : `${base}page/${page}/`;
}

export function pageCount(total: number): number {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

/** Page numbers a `getStaticPaths` should build *beyond* page 1. */
export function extraPages(total: number): number[] {
  return Array.from({ length: pageCount(total) - 1 }, (_, i) => i + 2);
}

export interface Paged<T> {
  items: T[];
  current: number;
  last: number;
  /** Size of the whole collection, not of this page. */
  total: number;
  /** 1-based inclusive range this page covers, for the pager's `sed` line. */
  from: number;
  to: number;
  prevHref: string | null;
  nextHref: string | null;
}

export function paginate<T>(items: T[], current: number, base: string): Paged<T> {
  const last = pageCount(items.length);
  const start = (current - 1) * PAGE_SIZE;
  const page = items.slice(start, start + PAGE_SIZE);

  return {
    items: page,
    current,
    last,
    total: items.length,
    from: page.length ? start + 1 : 0,
    to: start + page.length,
    prevHref: current > 1 ? pageHref(base, current - 1) : null,
    nextHref: current < last ? pageHref(base, current + 1) : null,
  };
}
