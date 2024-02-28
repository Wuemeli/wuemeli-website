<template>
  <div class="flex flex-col items-center justify-center animate-fade-right">
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="blog in list" :key="blog._path" class="mb-4">
        <a :href="blog._path"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blog.title }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ blog.description }}</p>
        </a>
      </div>
    </ContentList>
  </div>
</template>