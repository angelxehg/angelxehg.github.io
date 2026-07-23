<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black flex flex-col font-mono text-gray-900 dark:text-gray-100">
    <!-- Same status-bar vocabulary as the homepage card, but full-bleed. -->
    <header
      class="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-gray-50/90 dark:bg-black/90 backdrop-blur"
    >
      <div class="mx-auto flex max-w-4xl items-center gap-2 px-4 py-2.5 text-xs sm:px-6">
        <span class="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span
            class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
          ></span>
          <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
        </span>
        <a
          href="/"
          class="text-gray-500 hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400"
        >angelxehg.com</a>
        <span class="truncate text-gray-500 dark:text-gray-400">{{ path }}</span>
        <span class="ml-auto inline-flex shrink-0 items-center gap-1.5">
          <span class="text-emerald-600 dark:text-emerald-400 font-semibold">operational</span>
          <span class="hidden text-gray-300 dark:text-gray-600 sm:inline" aria-hidden="true">·</span>
          <span class="hidden text-gray-500 dark:text-gray-400 sm:inline">{{ buildInfo.region }}</span>
        </span>
      </div>
    </header>

    <main class="mx-auto w-full max-w-4xl flex-grow px-4 py-8 sm:px-6 sm:py-12">
      <slot />
    </main>

    <SiteFooter :build-info="buildInfo" />
  </div>
</template>

<script setup>
import SiteFooter from '../SiteFooter.vue';

defineProps({
  /** Path segment shown after the host in the status bar, e.g. "/blog". */
  path: { type: String, default: '' },
  buildInfo: {
    type: Object,
    default: () => ({ commit: 'dev', builtAt: 'local', astroVersion: '', region: 'mx-central-1' }),
  },
});
</script>
