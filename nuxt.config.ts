import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxt/image', '@nuxtjs/seo', '@nuxtjs/plausible', '@nuxt/content'],

  site: {
    name: "Wuemeli's Portfolio",
  },

  plausible: {
    domain: 'wuemeli.com',
    apiHost: 'https://googleisbad.wuemeli.com',
    autoOutboundTracking: true,
    autoPageviews: true,
  },

  sitemap: {
    enabled: true,
  },

  nitro: {
    preset: 'static',
  },
})
