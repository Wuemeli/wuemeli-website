export default defineNuxtConfig({
  ssr: true,
  devtools: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wuemeli\'s Portfolio 🔥',
      lang: 'en',
    },
    meta: [
      { hid: 'description', name: 'description', content: 'Explore Wuemeli\'s impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.' },
      { name: 'keywords', content: 'portfolio, web development, Nuxt.js, Discord.js, Wuemeli, projects, creative designs, web solutions' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Wuemeli' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'og:title', property: 'og:title', content: 'Wuemeli\'s Portfolio 🔥' },
      { hid: 'og:description', property: 'og:description', content: 'Explore Wuemeli\'s impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.' },
      { hid: 'og:url', property: 'og:url', content: 'https://wuemeli.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://wuemeli.com/img/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Wuemeli\'s Portfolio' },
      { name: 'twitter:description', content: 'Explore Wuemeli\'s web development portfolio, including Nuxt.js and Discord.js projects. Get inspired by innovative solutions and creative designs.' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/robots', 'nuxt-simple-sitemap'],

  robots: {
    UserAgent: '*',
    Sitemap: 'https://wuemeli.com/sitemap.xml',
    CleanParam: 'query',
  },

  buildModules: [
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: {
      fileName: '/img/icon.png',
    },
    meta: {
      title: 'Wuemeli\'s Portfolio 🔥',
      author: 'Wuemeli',
    },
    manifest: {
      name: 'Wuemeli\'s Portfolio 🔥',
      short_name: 'Wuemeli\'s Portfolio 🔥',
      lang: 'en',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
