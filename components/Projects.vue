<template>
  <div class="container mx-auto px-4">
    <section class="mt-10">
      <h1 class="text-3xl font-semibold text-center mb-6 animate-fade-up text-iridium">Featured Projects 🚀</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
        <div v-for="project in customProjects" :key="project.id"
          class="bg-baltic-sea/90 shadow-lg rounded-lg overflow-hidden p-8 flex flex-col h-full transition-transform duration-300 hover:scale-105 border border-dune/30">
          <div class="flex-grow">
            <h2 class="text-2xl font-bold text-iridium mb-3">{{ project.title }}</h2>
            <p v-if="project.description" class="text-iridium/80 mb-4">{{ truncateDescription(project.description) }}</p>
            <div v-if="project.technologies" class="flex flex-wrap gap-2 mt-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-2 py-1 text-xs rounded-full bg-dune/30 text-white font-medium">
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a :href="project.html_url" target="_blank" rel="noopener noreferrer"
              class="plausible-event-name=Project+Click inline-block bg-dune text-white px-6 py-3 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              View Project
            </a>
            <span v-if="project.status" class="text-xs font-medium px-3 py-1 rounded-full"
              :class="getStatusClass(project.status)">
              {{ project.status }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <h1 class="text-3xl font-semibold text-center mb-6 animate-fade-up text-iridium">GitHub Repositories 🐙</h1>

      <div class="mb-8 flex flex-wrap justify-center gap-4 animate-fade-up">
        <div class="relative">
          <select v-model="filter"
            class="appearance-none bg-baltic-sea border border-dune/40 text-iridium rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-dune">
            <option value="all">All Projects</option>
            <option value="starred">Most Starred</option>
            <option value="recent">Recently Updated</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dune">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center py-12 animate-fade-up">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dune"></div>
      </div>

      <div v-else-if="error" class="bg-red-500/20 border-l-4 border-red-500 text-red-100 p-4 mb-8 animate-fade-up rounded">
        <p>{{ error }}</p>
        <button @click="fetchGitHubRepos" class="mt-2 text-dune underline">Try again</button>
      </div>

      <div v-else-if="filteredRepos.length === 0" class="text-center py-12 animate-fade-up">
        <p class="text-iridium/70">No repositories found</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
        <div v-for="repo in filteredRepos" :key="repo.id"
          class="bg-baltic-sea/90 shadow-lg rounded-lg overflow-hidden p-8 flex flex-col h-full transition-transform duration-300 hover:scale-105 border border-dune/30">
          <div class="flex-grow">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-xl font-bold text-iridium">{{ repo.name }}</h2>
              <div class="flex items-center">
                <span class="text-yellow-400 flex items-center font-medium">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {{ repo.stargazers_count }}
                </span>
              </div>
            </div>
            <p v-if="repo.description" class="text-iridium/80 mb-4">{{ truncateDescription(repo.description) }}</p>
            <div v-if="repo.language" class="mt-2 mb-4">
              <span class="px-2 py-1 text-xs rounded-full bg-dune/30 text-white font-medium">
                {{ repo.language }}
              </span>
            </div>
            <p v-if="repo.updated_at" class="text-xs text-iridium/70 mt-2">
              Updated: {{ formatDate(repo.updated_at) }}
            </p>
          </div>
          <div class="mt-4">
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
              class="plausible-event-name=Project+Click inline-block bg-dune text-white px-6 py-3 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              View on GitHub
            </a>
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
      isLoading: true,
      error: null,
      filter: 'all',
      customProjects: [
        {
          id: 1,
          title: 'Heckerbot',
          description: 'Heckerbot is a advanced Discord bot with a lot of features.',
          html_url: 'https://heckerbot.dev/',
          technologies: ['Discord.js', 'Node.js', 'MongoDB'],
          status: 'active'
        },
        {
          id: 2,
          title: 'TOR Relay Configurator',
          description: 'A simple TOR Relay Configurator for Linux.',
          html_url: 'https://tor-relay.dev/',
          technologies: ['Shell', 'Linux', 'TOR'],
          status: 'stable'
        }
      ],
    }
  },
  computed: {
    filteredRepos() {
      if (!this.githubRepos.length) return [];

      let repos = [...this.githubRepos];

      if (this.filter !== 'all') {
        repos = repos.filter(repo => !repo.fork);
      }

      switch (this.filter) {
        case 'starred':
          return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
        case 'recent':
          return repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        default:
          return repos;
      }
    }
  },
  async created() {
    await this.fetchGitHubRepos();
  },
  methods: {
    async fetchGitHubRepos() {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await $fetch(
          'https://api.github.com/users/wuemeli/repos?per_page=100'
        );
        this.githubRepos = response;
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        this.error = 'Failed to load GitHub repositories. Please try again later.';
      } finally {
        this.isLoading = false;
      }
    },
    truncateDescription(description) {
      if (!description) return '';
      if (description.length > 100) {
        return description.slice(0, 100) + '...';
      }
      return description;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(date);
    },
    getStatusClass(status) {
      switch(status.toLowerCase()) {
        case 'active':
          return 'bg-green-500/30 text-green-100 border border-green-500/50';
        case 'stable':
          return 'bg-blue-500/30 text-blue-100 border border-blue-500/50';
        case 'deprecated':
          return 'bg-red-500/30 text-red-100 border border-red-500/50';
        case 'maintenance':
          return 'bg-yellow-500/30 text-yellow-100 border border-yellow-500/50';
        default:
          return 'bg-gray-500/30 text-gray-100 border border-gray-500/50';
      }
    }
  }
}
</script>