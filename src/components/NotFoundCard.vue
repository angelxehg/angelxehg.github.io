<template>
  <div class="min-h-screen bg-white dark:bg-black flex flex-col">
    <div class="flex-grow flex items-center justify-center">
      <div class="p-8 w-full max-w-md mx-4 sm:mx-auto bg-blue-100 dark:bg-blue-900 rounded-lg shadow">
        <h1 class="text-3xl font-bold text-center mb-4 text-black dark:text-white">
          Oops! 😕
        </h1>
        <p class="text-black dark:text-white text-center mb-6">
          Page not found
        </p>
        <a href="/" class="text-blue-600 dark:text-blue-400 hover:underline">Go home</a>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from './SiteFooter.vue';
</script>
