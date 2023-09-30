<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Stats 💻</p>
      <br />
      <img :src="githubStats" alt="Github Stats" class="w-30 h-auto" />
    </div>
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Streak 🔥</p>
      <br />
      <img :src="githubStreak" alt="Github Streak" class="w-30 h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GithubPage',
  head: {
    title: 'Github Stats 💻',
  },
  data() {
    return {
      githubStats: '',
      githubStreak: '',
    }
  },
  methods: {
    async getGithubStats() {
      try {
        this.githubStats =
          'https://github-readme-stats.vercel.app/api?username=wuemeli&show_icons=true&theme=radical&border=false'
        this.githubStreak =
          'https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false'
      } catch (error) {
        console.error('Error fetching Github stats:', error)
      }
    },
  },
  mounted() {
    this.getGithubStats()
  },
}
</script>
