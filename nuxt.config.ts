import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxtjs/plausible', '@nuxt/content'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Wuemeli's Portfolio",
    },
  },

  plausible: {
    domain: 'wuemeli.com',
    apiHost: 'https://googleisbad.wuemeli.com',
    autoOutboundTracking: true,
    autoPageviews: true,
  },

  nitro: {
    preset: 'static',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
