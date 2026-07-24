<template>
  <header class="border-b border-gray-200 pb-6 dark:border-gray-800">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      cat {{ slug }}.md
    </p>

    <h1 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
      {{ title }}
    </h1>

    <div class="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
      <span>{{ date }}</span>
      <span v-if="updated">updated {{ updated }}</span>
      <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
      <a
        v-if="mirror"
        :href="mirror"
        rel="external"
        title="Read the mirrored copy on dev.to"
        class="hover:text-emerald-600 hover:underline dark:hover:text-emerald-400"
      >&#8599; mirrored on dev.to</a>
    </div>
  </header>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  updated: { type: String, default: null },
  tags: { type: Array, default: () => [] },
  /** dev.to URL, or null when this post has not been mirrored yet. */
  mirror: { type: String, default: null },
});
</script>
