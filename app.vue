<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
useHead({
  title: "Angel Hurtado's portfolio",
  meta: [
    { name: 'description', content: "Angel Hurtado's portfolio description" },
    { name: 'og:title', content: "Angel Hurtado's portfolio" },
    { name: 'og:site_name', content: "Angel Hurtado's portfolio" },
    { name: 'og:description', content: "Angel Hurtado's portfolio description" },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'images/OpenGraph.Opt.png' },
    { name: 'google-site-verification', content: '0hO20fg4BEvRMjuTmUHifKltClQKkc4KKlwGD9tg6' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
