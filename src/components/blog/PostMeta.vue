<template>
  <header class="border-b border-gray-200 pb-6 dark:border-gray-800">
    <!--
      Piped through `glow`, not a bare `cat`: what follows is rendered
      Markdown, and a plain `cat` would advertise raw source.
    -->
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      cat {{ slug }}.md | glow -
    </p>

    <h1 class="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
      {{ title }}
    </h1>

    <div class="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
      <span>{{ date }}</span>
      <span v-if="updated">updated {{ updated }}</span>
      <a
        v-for="tag in tags"
        :key="tag.href"
        :href="tag.href"
        class="hover:text-emerald-600 hover:underline dark:hover:text-emerald-400"
      >#{{ tag.label }}</a>
    </div>
  </header>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  updated: { type: String, default: null },
  /** `{ label, href }` rows — see `toTagLinks` in src/lib/posts.ts. */
  tags: { type: Array, default: () => [] },
});
</script>
