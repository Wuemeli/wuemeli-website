<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <time class="text-sm text-gray-500">
          {{ formatDate(article.date) }}
        </time>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-3">
        <NuxtLink
          :to="article._path"
          class="hover:text-blue-600 transition-colors duration-200"
        >
          {{ article.title }}
        </NuxtLink>
      </h2>

      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ article.description }}
      </p>

      <div class="flex items-center justify-between">
        <NuxtLink
          :to="article._path"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NuxtLink>

        <span class="text-sm text-gray-500"> By {{ article.author }} </span>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
