// https://nuxt.com/docs/api/configuration/nuxt-config

console.log("BUILD")
console.log("BUILD NETLIFY", process.env.NETLIFY)
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
  site: {indexable: true} // Disable indexing on Netlify
});
