#!/usr/bin/env node
/**
 * Mirror posts to dev.to. Canonical stays here; dev.to gets a copy that points
 * home via canonical_url.
 *
 * Stateless by design: nothing in this repo records dev.to article ids. The
 * canonical URL is the join key — if some article already claims a post's
 * canonical URL it is updated, otherwise a new one is created. There is no
 * third case and no local state that can drift.
 *
 * Usage:
 *   DEVTO_API_KEY=... node scripts/syndicate.mjs [--dry-run]
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { SITE_URL, postUrl, slugFromCanonical } from '../src/lib/site.mjs';

const API = 'https://dev.to/api';
const POSTS_DIR = new URL('../src/content/blog/', import.meta.url);
const DRY_RUN = process.argv.includes('--dry-run');
const API_KEY = process.env.DEVTO_API_KEY;

/** dev.to rejects more than four tags, and only alphanumeric ones. */
const MAX_TAGS = 4;

/** Space out writes; dev.to rate limits article create/update fairly tightly. */
const WRITE_DELAY_MS = 2_000;

function log(action, slug, detail = '') {
  console.log(`${action.padEnd(6)} ${slug}${detail ? `  ${detail}` : ''}`);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function api(method, endpoint, body) {
  const res = await fetch(`${API}${endpoint}`, {
    method,
    headers: {
      'api-key': API_KEY,
      accept: 'application/vnd.forem.api-v1+json',
      ...(body ? { 'content-type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`${method} ${endpoint} -> ${res.status} ${res.statusText}: ${await res.text()}`);
  }
  return res.json();
}

/** Every local post opted in to syndication, as a dev.to article payload. */
async function readLocalPosts() {
  const files = (await readdir(POSTS_DIR, { recursive: true })).filter((f) => f.endsWith('.md'));
  const posts = [];

  for (const file of files.sort()) {
    const raw = await readFile(new URL(file, POSTS_DIR), 'utf8');
    const { data, content } = matter(raw);
    const slug = file.slice(0, -'.md'.length).split(path.sep).join('/');

    if (data.draft || !data.syndicate) continue;

    posts.push({
      slug,
      article: {
        title: data.title,
        description: data.description,
        body_markdown: content.trim(),
        published: true,
        canonical_url: postUrl(slug),
        tags: (data.tags ?? [])
          .map((tag) => String(tag).toLowerCase().replace(/[^a-z0-9]/g, ''))
          .filter(Boolean)
          .slice(0, MAX_TAGS),
        ...(data.image ? { main_image: new URL(data.image, SITE_URL).href } : {}),
      },
    });
  }

  return posts;
}

/** Slug -> existing dev.to article, keyed by what its canonical points at. */
async function readRemoteMirrors() {
  const articles = await api('GET', '/articles/me/all?per_page=1000');
  const mirrors = new Map();

  for (const article of articles) {
    const slug = slugFromCanonical(article.canonical_url);
    if (slug && !mirrors.has(slug)) mirrors.set(slug, article);
  }

  return mirrors;
}

/**
 * True when dev.to already holds exactly this content. Without it, every push
 * to main would bump edited_at on every article.
 */
function isUnchanged(remote, article) {
  return (
    remote.title === article.title &&
    (remote.description ?? '') === article.description &&
    (remote.body_markdown ?? '').trim() === article.body_markdown &&
    remote.canonical_url === article.canonical_url
  );
}

async function main() {
  if (!API_KEY && !DRY_RUN) {
    console.warn('DEVTO_API_KEY is not set — skipping syndication.');
    return;
  }

  const posts = await readLocalPosts();
  if (posts.length === 0) {
    console.log('No posts opted in to syndication (set `syndicate: true` in frontmatter).');
    return;
  }

  const mirrors = API_KEY ? await readRemoteMirrors() : new Map();
  if (!API_KEY) console.warn('DEVTO_API_KEY is not set — dry run assumes nothing exists yet.\n');

  let writes = 0;

  for (const { slug, article } of posts) {
    const remote = mirrors.get(slug);

    if (remote && isUnchanged(remote, article)) {
      log('skip', slug, 'up to date');
      continue;
    }

    if (DRY_RUN) {
      log(remote ? 'update' : 'create', slug, remote ? `id=${remote.id}` : article.canonical_url);
      continue;
    }

    if (writes > 0) await sleep(WRITE_DELAY_MS);
    writes += 1;

    const result = remote
      ? await api('PUT', `/articles/${remote.id}`, { article })
      : await api('POST', '/articles', { article });

    log(remote ? 'update' : 'create', slug, result.url);
  }

  if (DRY_RUN) console.log('\n(dry run — nothing was written)');
}

main().catch((error) => {
  console.error(`syndication failed: ${error.message}`);
  process.exit(1);
});
