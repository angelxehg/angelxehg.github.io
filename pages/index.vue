<template>
  <div class="min-h-screen bg-white dark:bg-black flex flex-col">
    <div class="flex-grow flex items-center justify-center">
      <div class="p-8 w-full max-w-md mx-4 sm:mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
        <h1 class="text-3xl font-bold text-center mb-4 text-black dark:text-white">
          Angel Hurtado
        </h1>
        <p class="text-black dark:text-white text-center mb-6">Site is under construction!</p>
        <ul class="space-y-2">
          <li>
            <a href="mailto:angelxehg@proton.me" rel="external" title="Email (angelxehg@proton.me)"
               class="text-blue-600 dark:text-blue-400 hover:underline">
              Email (angelxehg@proton.me)
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
    <footer class="py-4 text-center text-gray-600 dark:text-gray-400">
      <p>&copy; {{ new Date().getFullYear() }} Angel Hurtado. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "Angel Hurtado's portfolio",
  meta: [
    {name: 'description', content: "Angel Hurtado's portfolio description"},
    {name: 'og:title', content: "Angel Hurtado's portfolio"},
    {name: 'og:site_name', content: "Angel Hurtado's portfolio"},
    {name: 'og:description', content: "Angel Hurtado's portfolio description"},
    {name: 'og:type', content: 'website'},
    {name: 'og:image', content: 'images/og.image.png'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'google-site-verification', content: '0hO20fg4BEvRMjuTmUHifKltClQKkc4KKlwGD9tg6'}
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ],
  htmlAttrs: {
    lang: 'en',
  }
})
</script>