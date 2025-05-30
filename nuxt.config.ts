// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['@/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: {enabled: true},
  modules: ['@nuxtjs/robots'],
  site: {indexable: !process.env.NETLIFY} // Disable indexing on Netlify
});
