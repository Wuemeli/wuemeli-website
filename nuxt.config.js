export default defineNuxtConfig({
  ssr: true,
  devtools: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wuemeli\'s Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        { defer: true, dataDomain: "wuemeli.com", src: "https://googleisbad.wuemeli.com/js/script.outbound-links.tagged-events.js" },
        {
          children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
          `,
          type: 'text/javascript',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          href: 'https://spotify-github-profile.kittinanx.com/api/view?uid=d1ytrh3gx9xa7mzw79h2mbeqi&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false',
          as: 'image',
          fetchpriority: 'high'
        }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Explore Wuemeli\'s impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.' },
        { name: 'keywords', content: 'portfolio, web development, Nuxt.js, Discord.js, Wuemeli, projects, creative designs, web solutions' },
        { name: 'author', content: 'Wuemeli' },
        { hid: 'og:title', property: 'og:title', content: 'Wuemeli\'s Portfolio 🔥' },
        { hid: 'og:description', property: 'og:description', content: 'Explore Wuemeli\'s impressive portfolio of web development projects, including Nuxt.js and Discord.js creations. Discover innovative web solutions and creative designs.' },
        { hid: 'og:url', property: 'og:url', content: 'https://wuemeli.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://wuemeli.com/img/og-image.png' },
      ],
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  modules: ['@nuxt/image', '@nuxt/content'],

  site: {
    url: 'https://wuemeli.com',
  },

  content: {
    highlight: {
      theme: 'github-light',
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-08-06',
})