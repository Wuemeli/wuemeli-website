<template>
  <div class="container mx-auto px-4">
    <section class="mt-10">
      <h1 class="text-3xl font-semibold text-center mb-6 animate-flip-down">Custom Projects 📱</h1>
      <br>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-flip-down">
        <div v-for="project in customProjects" :key="project.id"
          class="bg-baltic-sea shadow-md rounded-lg overflow-hidden p-8">
          <div class="max-w-sm mx-auto">
            <h2 class="text-2xl font-bold text-iridium">{{ project.title }}</h2>
            <p class="text-gray-600">{{ truncateDescription(project.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-10">
      <h1 class="text-3xl font-semibold text-center mb-6 animate-fade-right">GitHub Repositories 🐙</h1>
      <br>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-right">
        <div v-for="repo in githubRepos" :key="repo.id" class="bg-baltic-sea shadow-md rounded-lg overflow-hidden p-8">
          <div class="max-w-sm mx-auto">
            <h2 class="text-2xl font-bold text-iridium">{{ repo.name }}</h2>
            <p class="text-gray-600">{{ truncateDescription(repo.description) }}</p>
            <div class="flex justify-between items-center mt-4">
              <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
                class="inline-block bg-dune text-white px-6 py-3 rounded transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">Check
                it Out</a>
              <span class="text-yellow-500">{{ repo.stargazers_count }} Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br>
  </div>
</template>



<script>
export default {
  data() {
    return {
      githubRepos: [],
      customProjects: [
        {
          id: 1,
          title: 'Heckerbot',
          description: 'Heckerbot is a advanced Discord bot with a lot of features.',
        },
      ],
    }
  },
  async created() {
    await this.fetchGitHubRepos()
  },
  methods: {
    async fetchGitHubRepos() {
      try {
        const response = await $fetch(
          'https://api.github.com/users/wuemeli/repos'
        )
        this.githubRepos = response
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error)
      }
    },
    truncateDescription(description) {
      if (description && description.length > 100) {
        return description.slice(0, 100) + '...';
      }
      return description;
    },
  },
}
</script>
