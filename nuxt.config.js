export default defineNuxtConfig({
  ssr: true,
  devtools: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wuemeli\'s Portfolio 🔥',
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
        { rel: 'preload', href: '/img/homeserver.jpg', as: 'image' },
        { rel: 'preload', href: 'https://api.github.com/users/wuemeli/repos', as: 'fetch' },
        { rel: 'preload', href: 'https://github-readme-stats.vercel.app/api/wakatime?username=wuemeli&theme=radical', as: 'image' },
        { rel: 'preload', href: 'https://stats.dooboo.io/api/github-stats?login=wuemeli', as: 'image' },
        { rel: 'preload', href: 'https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false', as: 'image' },
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

  modules: ['@nuxtjs/robots', 'nuxt-simple-sitemap', '@nuxt/image', '@nuxt/content'],

  site: {
    url: 'https://wuemeli.com',
  },

  content: {
    highlight: {
      theme: 'github-light',
    }
  },

  robots: {
    UserAgent: '*',
    Sitemap: 'https://wuemeli.com/sitemap.xml',
    CleanParam: 'query',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
