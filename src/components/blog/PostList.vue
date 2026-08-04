<template>
  <div>
    <ul v-if="posts.length" class="mt-6 space-y-8">
      <li v-for="post in posts" :key="post.slug">
        <a :href="`/blog/${post.slug}/`" class="group block">
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
            <span class="hidden sm:inline" aria-hidden="true">-rw-r--r--</span>
            <span>{{ post.date }}</span>
            <span class="tabular-nums">{{ post.size }}</span>
            <span
              class="text-emerald-600 group-hover:underline dark:text-emerald-400"
            >{{ post.slug }}.md</span>
          </div>
          <p
            class="mt-1.5 text-base font-semibold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
          >{{ post.title }}</p>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ post.description }}</p>
        </a>

        <!-- Outside the post link on purpose: these are their own destinations. -->
        <div v-if="post.tags.length" class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
          <a
            v-for="tag in post.tags"
            :key="tag.href"
            :href="tag.href"
            class="text-gray-500 hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400"
          >#{{ tag.label }}</a>
        </div>
      </li>
    </ul>

    <p v-else class="mt-6 text-sm text-gray-500 dark:text-gray-400">{{ empty }}</p>
  </div>
</template>

<script setup>
defineProps({
  /** Plain, pre-serialized rows — see `toRow` in src/lib/posts.ts. */
  posts: { type: Array, default: () => [] },
  /** Shown instead of the list when there is nothing to show. */
  empty: { type: String, default: 'total 0 — nothing published yet.' },
});
</script>
