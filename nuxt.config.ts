// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  css: ['@/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: {enabled: true},
  modules: ['@nuxtjs/robots'],
  vite: {
    plugins: [tailwindcss()],
  },
  site: {indexable: !process.env.NETLIFY} // Disable indexing on Netlify
});
