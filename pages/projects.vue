<template>
  <div class="max-w-6xl px-10 mx-auto space-y-8">
    <section>
      <br />
      <h1 class="text-3xl font-semibold text-center">Custom Projects 📱</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="project in customProjects" :key="project.id"
          class="bg-opacity-70 shadow-md rounded-lg overflow-hidden p-6" :style="{ 'background-color': randomColor() }">
          <div>
            <h2 class="text-xl font-semibold">{{ project.title }}</h2>
            <p class="text-gray-600">{{ truncateDescription(project.description) }}</p>
            <div class="mt-4"></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h1 class="text-3xl font-semibold text-center">GitHub Repositories 📱</h1>
      <br />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="repo in githubRepos" :key="repo.id" class="bg-opacity-70 shadow-md rounded-lg overflow-hidden p-6"
          :style="{ 'background-color': randomColor() }">
          <div>
            <h2 class="text-xl font-semibold">{{ repo.name }}</h2>
            <p class="text-gray-600">{{ truncateDescription(repo.description) }}</p>
            <div class="flex justify-between items-center mt-4">
              <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
                class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check it Out</a>
              <span class="text-yellow-500">{{ repo.stargazers_count }} Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      githubRepos: [],
      customProjects: [
        {
          id: 1,
          title: 'Heckerbot',
          description: 'Heckerbot is an advanced Discord Bot with a very long description that exceeds 100 characters. Heckerbot is an advanced Discord Bot with a very long description that exceeds 100 characters. Heckerbot is an advanced Discord Bot with a very long description that exceeds 100 characters.',
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
    randomColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16)
      return `#${randomColor}`
    },
    truncateDescription(description) {
      if (description && description.length > 100) {
        return description.slice(0, 100) + '...';
      }
      return description;
    },
  },
  head: {
    title: 'Projects 📱',
  },
}
</script>
