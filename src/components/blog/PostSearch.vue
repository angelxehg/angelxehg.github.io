<template>
  <div>
    <h1 class="text-sm text-gray-900 dark:text-gray-100">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      ls -lh {{ dir }}
    </h1>

    <!--
      The filter reads as the next command in the session rather than as a
      form control: a bare field between two quote marks, no box, no button.
    -->
    <div
      v-if="posts.length"
      class="mt-4 flex items-baseline gap-1.5 border-b border-gray-200 pb-2 text-sm dark:border-gray-800"
    >
      <span class="shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true">$</span>
      <span class="shrink-0 text-gray-500 dark:text-gray-400">grep -i</span>
      <span class="shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true">"</span>
      <input
        v-model="query"
        type="search"
        :disabled="!ready"
        :placeholder="ready ? 'Search by title, tag' : 'search needs javascript'"
        aria-label="Filter posts on this page"
        autocomplete="off"
        spellcheck="false"
        class="min-w-0 flex-1 bg-transparent text-emerald-600 caret-emerald-500 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed dark:text-emerald-400 dark:placeholder:text-gray-600"
        @keydown.escape="query = ''"
      />
      <span class="shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true">"</span>
      <span class="hidden shrink-0 text-gray-500 sm:inline dark:text-gray-400">{{ dir }}</span>
    </div>

    <PostList :posts="visible" :empty="empty" />

    <p class="mt-10 text-xs text-gray-500 dark:text-gray-400" aria-live="polite">{{ count }}</p>

    <!-- A filtered view has no page 2; the pager returns with the full list. -->
    <Pager v-if="!q" v-bind="page" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import PostList from './PostList.vue';
import Pager from './Pager.vue';

const props = defineProps({
  /** This page's rows — see `toRow` in src/lib/posts.ts. */
  posts: { type: Array, default: () => [] },
  /** Size of the whole listing, which may be larger than `posts`. */
  total: { type: Number, default: 0 },
  /** The directory this listing represents, e.g. `~/blog/tags/react`. */
  dir: { type: String, default: '~/blog' },
  /** `paginate()`'s result, minus its items. */
  page: { type: Object, default: () => ({ current: 1, last: 1 }) },
});

const query = ref('');

/**
 * The server renders the finished listing — every row, no filter — so a reader
 * with no JS, a crawler, or a page whose island never boots all get the same
 * complete page they get today. Only the input's disabled state changes on
 * mount, and it changes to something more capable, never less.
 */
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});

/** `#react` and `react` should find the same thing. */
const q = computed(() => query.value.trim().replace(/^#/, '').toLowerCase());

const visible = computed(() => {
  if (!q.value) return props.posts;
  return props.posts.filter((post) => haystack(post).includes(q.value));
});

function haystack(post) {
  return [post.title, post.description, post.slug, ...post.tags.map((tag) => tag.label)]
    .join(' ')
    .toLowerCase();
}

const empty = computed(() =>
  q.value ? `no matches for "${query.value.trim()}".` : 'total 0 — nothing published yet.',
);

const count = computed(() => {
  const shown = visible.value.length;
  if (q.value) return `${shown} ${shown === 1 ? 'match' : 'matches'} on this page`;
  if (props.page.last > 1) return `showing ${shown} of ${props.total} files`;
  return `${props.total} ${props.total === 1 ? 'file' : 'files'}`;
});
</script>
