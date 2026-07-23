<template>
  <div class="min-h-screen bg-white dark:bg-black flex flex-col">
    <div class="flex-grow flex items-center justify-center">
      <div class="p-8 w-full max-w-md mx-4 sm:mx-auto bg-blue-50 dark:bg-blue-950 rounded-lg shadow">
        <h1 class="text-3xl font-bold text-center mb-4 text-black dark:text-white">
          Angel Hurtado
        </h1>
        <p class="text-black dark:text-white text-center mb-6">Site is under construction!</p>
        <ul class="space-y-2">
          <li>
            <a href="mailto:stdin@angelxehg.com" rel="external" title="Email (stdin@angelxehg.com)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              Email (stdin@angelxehg.com)
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/angelxehg" rel="external"
               title="LinkedIn (/in/angelxehg)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              LinkedIn (/in/angelxehg)
            </a>
          </li>
          <li>
            <a href="https://github.com/angelxehg" rel="external" title="GitHub (@angelxehg)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              GitHub (@angelxehg)
            </a>
          </li>
          <li>
            <a href="https://dev.to/angelxehg" rel="external" title="Dev.to (@angelxehg)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              Dev.to (@angelxehg)
            </a>
          </li>
          <li>
            <a href="https://threads.net/angelxehg" rel="external" title="Threads (@angelxehg)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              Threads (@angelxehg)
            </a>
          </li>
          <li>
            <a href="https://instagram.com/angelxehg" rel="external" title="Instagram (@angelxehg)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              Instagram (@angelxehg)
            </a>
          </li>
        </ul>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from './SiteFooter.vue';
</script>
