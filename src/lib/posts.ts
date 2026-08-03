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
