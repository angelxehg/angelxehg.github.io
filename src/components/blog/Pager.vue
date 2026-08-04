<template>
  <!--
    Links only — no JS, no state. Renders nothing at all while everything fits
    on one page, so the pager stays invisible until it is actually needed.
  -->
  <nav
    v-if="last > 1"
    class="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-gray-200 pt-6 text-xs dark:border-gray-800"
    aria-label="Pagination"
  >
    <span class="text-gray-500 dark:text-gray-400">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      sed -n '{{ from }},{{ to }}p' &mdash; page {{ current }}/{{ last }}
    </span>

    <span class="flex items-baseline gap-4">
      <a
        v-if="prevHref"
        :href="prevHref"
        rel="prev"
        class="text-gray-500 hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400"
      >&larr; prev</a>
      <span v-else class="text-gray-300 dark:text-gray-700">&larr; prev</span>

      <a
        v-if="nextHref"
        :href="nextHref"
        rel="next"
        class="text-gray-500 hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400"
      >next &rarr;</a>
      <span v-else class="text-gray-300 dark:text-gray-700">next &rarr;</span>
    </span>
  </nav>
</template>

<script setup>
defineProps({
  /** All of these come straight off `paginate()` in src/lib/posts.ts. */
  current: { type: Number, default: 1 },
  last: { type: Number, default: 1 },
  from: { type: Number, default: 0 },
  to: { type: Number, default: 0 },
  prevHref: { type: String, default: null },
  nextHref: { type: String, default: null },
});
</script>
