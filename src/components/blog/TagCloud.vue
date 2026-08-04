<template>
  <div>
    <h1 class="text-sm text-gray-900 dark:text-gray-100">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      ls ~/blog/tags
    </h1>

    <ul v-if="tags.length" class="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-3 text-sm">
      <li v-for="tag in tags" :key="tag.slug">
        <a
          :href="tag.href"
          class="text-gray-600 hover:text-emerald-600 hover:underline dark:text-gray-300 dark:hover:text-emerald-400"
        >#{{ tag.label }}</a>
        <span class="ml-1.5 text-xs text-gray-500 tabular-nums dark:text-gray-400">({{ tag.count }})</span>
      </li>
    </ul>

    <p v-else class="mt-6 text-sm text-gray-500 dark:text-gray-400">
      total 0 &mdash; no tags in use yet.
    </p>

    <p v-if="tags.length" class="mt-10 text-xs text-gray-500 dark:text-gray-400">
      {{ tags.length }} {{ tags.length === 1 ? 'tag' : 'tags' }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  /** `{ label, href, slug, count }` rows — see `getTags` in src/lib/posts.ts. */
  tags: { type: Array, default: () => [] },
});
</script>
