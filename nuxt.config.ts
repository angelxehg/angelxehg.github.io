// https://nuxt.com/docs/api/configuration/nuxt-config

const isNetlify = process.env.NETLIFY === 'true'
console.log('isNetlify', isNetlify)

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: {enabled: true},
  modules: ['@nuxtjs/robots'],
  site: {indexable: isNetlify} // Disable indexing on Netlify
});
