<template>
  <main class="relative mx-auto max-w-prose overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
    <nuxt-link class="block cursor-pointer" href="/blog">
      <span class="text-gray-500">Back to blog</span>
    </nuxt-link>
    <ContentDoc v-slot="{ doc }">
      <h2 class="my-4 text-4xl font-semibold">{{ doc.title }}</h2>
      <p class="my-4 text-gray-500">
        by, {{ doc.author }}
      </p>
      <div class="prose prose-lg first-letter:text-3xl first-letter:text-blue-600">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>