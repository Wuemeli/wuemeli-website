import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Wuemeli's Portfolio",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            "Explore Wuemeli's impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.",
        },
        {
          name: 'keywords',
          content:
            'portfolio, web development, Nuxt.js, Discord.js, Wuemeli, projects, creative designs, web solutions',
        },
        { name: 'author', content: 'Wuemeli' },
        {
          property: 'og:title',
          content: "Wuemeli's Portfolio 🔥",
        },
        {
          property: 'og:description',
          content:
            "Explore Wuemeli's impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.",
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content: 'https://wuemeli.com/img/og-image.png',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  modules: ['@nuxt/image', '@nuxtjs/seo'],
})
