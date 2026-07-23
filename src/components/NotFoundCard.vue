<template>
  <div class="min-h-screen bg-gray-50 dark:bg-black flex flex-col font-mono text-gray-900 dark:text-gray-100">
    <main class="flex-grow flex items-center justify-center py-10">
      <div
        class="w-full max-w-md mx-4 sm:mx-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm overflow-hidden"
      >
        <!-- Incident bar: the 404 as a service that isn't up. -->
        <div
          class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 text-xs"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true"></span>
          <span class="text-gray-500 dark:text-gray-400">angelxehg.com</span>
          <span class="ml-auto text-red-600 dark:text-red-400 font-semibold">404 · not found</span>
        </div>

        <div class="p-6 sm:p-8 space-y-5">
          <div class="space-y-1">
            <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Resource not found
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This endpoint was never provisioned in
              <span class="text-gray-700 dark:text-gray-300">mx-central-1</span>.
            </p>
          </div>

          <pre
            class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/40 p-4 text-xs leading-relaxed text-gray-600 dark:text-gray-400"
          ><code><span class="text-red-600 dark:text-red-400">HTTP/1.1 404 Not Found</span>
region: mx-central-1
status: no matching route</code></pre>

          <a
            href="/"
            class="inline-block text-sm text-emerald-600 hover:text-emerald-500 hover:underline dark:text-emerald-400"
          >← back to a healthy endpoint</a>
        </div>
      </div>
    </main>
    <SiteFooter :build-info="buildInfo" />
  </div>
</template>

<script setup>
import SiteFooter from './SiteFooter.vue';

defineProps({
  buildInfo: {
    type: Object,
    default: () => ({ commit: 'dev', builtAt: 'local', astroVersion: '', region: 'mx-central-1' }),
  },
});
</script>
