<template>
  <footer class="py-6 text-center text-xs font-mono text-gray-500 dark:text-gray-500">
    <p class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
      <span>{{ buildInfo.region }}</span>
      <span class="text-gray-300 dark:text-gray-700">·</span>
      <span>deployed {{ buildInfo.builtAt }}</span>
      <span class="text-gray-300 dark:text-gray-700">·</span>
      <a
        v-if="commitUrl"
        :href="commitUrl"
        rel="external"
        title="View this commit on GitHub"
        class="hover:text-emerald-600 hover:underline dark:hover:text-emerald-400"
      >{{ buildInfo.commit }}</a>
      <span v-else>{{ buildInfo.commit }}</span>
      <span v-if="buildInfo.astroVersion" class="text-gray-300 dark:text-gray-700">·</span>
      <span v-if="buildInfo.astroVersion">astro {{ buildInfo.astroVersion }}</span>
    </p>
    <p class="mt-2 text-gray-400 dark:text-gray-600">
      &copy; {{ new Date().getFullYear() }} Angel Hurtado
    </p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  buildInfo: {
    type: Object,
    default: () => ({ commit: 'dev', builtAt: 'local', astroVersion: '', region: 'mx-central-1' }),
  },
});

const REPO = 'https://github.com/angelxehg/angelxehg.github.io';

// Link the hash to its commit page, but only when it's a real SHA
// (skip the local-dev / unknown placeholders that would 404).
const commitUrl = computed(() => {
  const c = props.buildInfo.commit;
  return c && !['dev', 'local', 'unknown'].includes(c) ? `${REPO}/commit/${c}` : null;
});
</script>
