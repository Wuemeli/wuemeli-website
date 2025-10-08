<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Blog</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          My Fucking Opinions!!!
        </p>
      </div>

      <div class="space-y-8">
        <article
          v-for="article in articles"
          :key="article._path"
          class="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <time class="text-sm text-gray-500">
                {{ formatDate(article.date) }}
              </time>
            </div>

            <h2 class="text-2xl font-bold mb-3">
              <NuxtLink
                :to="article.slug"
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
                :to="article.slug"
                class="inline-flex items-center font-medium"
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
            </div>
          </div>
        </article>
      </div>

      <div v-if="!articles?.length" class="text-center py-12">
        <h3 class="text-lg font-medium mb-2">No posts yet</h3>
        <p class="text-gray-500">Check back soon for new content!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = await queryCollection('blog').order('date', 'DESC').all()

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
