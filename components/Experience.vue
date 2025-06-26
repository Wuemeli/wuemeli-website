<template>
  <div class="max-w-6xl mx-auto py-10 px-4">
    <div class="max-w-6xl mx-auto py-10 px-4">
      <h1 class="text-3xl font-bold mb-6 text-center text-light-gray">
        <span class="text-gray-500">My </span>
        <span class="line-through text-gray-500">Tech Stack</span> Code
        Weapons
      </h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 mb-8">
      <button
        v-for="category in ['All', ...categories]"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-3 py-1 rounded-full text-sm transition-all',
          selectedCategory === category
            ? 'bg-blue-600 text-white'
            : 'bg-dark-gray text-light-gray hover:bg-gray-700',
        ]"
      >
        {{ category }}
      </button>
    </div>

    <div
      v-if="
        selectedCategory !== 'All' && hasMatchingTechnologies(selectedCategory)
      "
      class="mb-10"
    >
      <h2
        class="text-2xl font-semibold mb-4 text-light-gray border-l-4 border-blue-500 pl-3"
      >
        {{ selectedCategory }}
      </h2>
      <div class="flex flex-wrap justify-center gap-6 animate-fade-in">
        <div
          v-for="tech in categoryTechnologies(selectedCategory)"
          :key="tech.name"
          class="flex flex-col items-center p-4 rounded-lg bg-dark-gray bg-opacity-60 hover:bg-opacity-80 transition-all"
        >
          <NuxtImg
            :src="tech.icon"
            :alt="`${tech.name} Icon`"
            class="h-16 w-16 mb-2"
          />
          <span class="text-lg font-semibold text-light-gray">{{
            tech.name
          }}</span>
        </div>
      </div>
    </div>

    <div v-for="category in otherCategories" :key="category" class="mb-10">
      <h2
        v-if="hasMatchingTechnologies(category)"
        class="text-2xl font-semibold mb-4 text-light-gray"
      >
        {{ category }}
      </h2>
      <div
        v-if="hasMatchingTechnologies(category)"
        class="flex flex-wrap justify-center gap-6 animate-fade-in"
      >
        <div
          v-for="tech in categoryTechnologies(category)"
          :key="tech.name"
          class="flex flex-col items-center p-4 rounded-lg bg-dark-gray bg-opacity-40 hover:bg-opacity-60 transition-all"
        >
          <NuxtImg
            :src="tech.icon"
            :alt="`${tech.name} Icon`"
            class="h-16 w-16 mb-2"
          />
          <span class="text-lg font-semibold text-light-gray">{{
            tech.name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedCategory = ref('All')

const tech = [
  {
    category: 'Languages',
    technologies: [
      { name: 'JavaScript', icon: '/icons/js.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
    ],
  },
  {
    category: 'Frontend',
    technologies: [
      { name: 'VueJS', icon: '/icons/vue.svg' },
      { name: 'NuxtJS', icon: '/icons/nuxtjs.svg' },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'NodeJS', icon: '/icons/nodejs.svg' },
      { name: 'Bun', icon: '/icons/bun.svg' },
      { name: 'Discord.js', icon: '/icons/discordjs.svg' },
    ],
  },
  {
    category: 'DevOps & Tools',
    technologies: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Linux', icon: '/icons/linux.svg' },
    ],
  },
  {
    category: 'Databases',
    technologies: [{ name: 'MongoDB', icon: '/icons/mongodb.svg' }],
  },
  {
    category: 'Security',
    technologies: [{ name: 'Tor', icon: '/icons/tor.svg' }],
  },
]

const categories = computed(() => [
  ...new Set(tech.map((item) => item.category)),
])

const allTechnologies = computed(() => {
  return tech.flatMap((category) =>
    category.technologies.map((tech) => ({
      ...tech,
      category: category.category,
    })),
  )
})

const otherCategories = computed(() => {
  if (selectedCategory.value === 'All') {
    return categories.value
  }
  return categories.value.filter(
    (category) => category !== selectedCategory.value,
  )
})

const hasMatchingTechnologies = (category) => {
  return categoryTechnologies(category).length > 0
}

const categoryTechnologies = (category) => {
  return allTechnologies.value.filter((tech) => tech.category === category)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
