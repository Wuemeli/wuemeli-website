<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <div class="flex flex-col items-center">
      <p class="text-light-gray">Hi 👋 , my name is</p>
      <div class="flex items-center">
        <p class="text-4xl font-semibold">Wuemeli</p>
      </div>
      <p class="text-lg font-semibold text-light-gray">
        Freelance Full Stack Developer and Discord Bot Developer
      </p>
      <p class="text-light-gray">
        I  ❤️ creating Discord Bots and Websites with Nuxt.js and Express.js
      </p>
      <img :src="spotifyStats" alt="Spotify Stats" class="w-30 h-auto-center" loading="lazy" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Home 🏠',
  },
  data() {
    return {
      spotifyStats: '',
    }
  },
  methods: {
    async getSpotifyStats() {
      try {
        this.spotifyStats =
          'https://spotify-github-profile.vercel.app/api/view?uid=d1ytrh3gx9xa7mzw79h2mbeqi&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false'
      } catch (error) {
        console.error('Error fetching Spotify stats:', error)
      }
    },
  },
  mounted() {
    this.getSpotifyStats()
  },
}
</script>
