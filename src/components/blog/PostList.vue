<template>
  <div>
    <h1 class="text-sm text-gray-900 dark:text-gray-100">
      <span class="text-emerald-600 dark:text-emerald-400">$</span>
      ls -lh ~/blog
    </h1>

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

        <div class="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
          <span v-for="tag in post.tags" :key="tag" class="text-gray-500 dark:text-gray-400">
            #{{ tag }}
          </span>
          <a
            v-if="post.mirror"
            :href="post.mirror"
            rel="external"
            title="Read the mirrored copy on dev.to"
            class="ml-auto text-gray-500 hover:text-emerald-600 hover:underline dark:text-gray-400 dark:hover:text-emerald-400"
          >&#8599; dev.to</a>
        </div>
      </li>
    </ul>

    <p v-else class="mt-6 text-sm text-gray-500 dark:text-gray-400">
      total 0 &mdash; nothing published yet.
    </p>

    <p v-if="posts.length" class="mt-10 text-xs text-gray-500 dark:text-gray-400">
      {{ posts.length }} {{ posts.length === 1 ? 'file' : 'files' }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  /** Plain, pre-serialized rows — see src/pages/blog/index.astro. */
  posts: { type: Array, default: () => [] },
});
</script>
