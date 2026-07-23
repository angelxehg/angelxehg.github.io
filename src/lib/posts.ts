import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/**
 * Published posts, newest first. Drafts render in `astro dev` so they can be
 * previewed, and are dropped from every real build.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
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
