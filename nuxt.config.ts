import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxtjs/seo', '@nuxtjs/plausible', '@nuxt/content'],

  site: {
    name: "Wuemeli's Portfolio",
    url: 'https://wuemeli.com',
    description: "A portfolio website showcasing Wuemeli's work and projects.",
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
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
