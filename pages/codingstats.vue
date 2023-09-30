<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <p class="font-semibold">My Coding Stats 📊</p>
    <div class="flex flex-col items-center">
      <img
        :src="wakatimeStats"
        alt="Wuemelis Wakatime Stats"
        class="w-30 h-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodingStatsPage',
  head: {
    title: 'Coding Stats 📊',
  },
  data() {
    return {
      wakatimeStats: '',
    }
  },
  methods: {
    async getWakatimeStats() {
      try {
        this.wakatimeStats =
          'https://github-readme-stats.vercel.app/api/wakatime?username=wuemeli&theme=radical'
      } catch (error) {
        console.error('Error fetching Wakatime stats:', error)
      }
    },
  },
  mounted() {
    this.getWakatimeStats()
  },
}
</script>
