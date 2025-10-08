<template>
  <div class="min-h-screen bg-base-100">
    <div class="container mx-auto px-4 py-12">
      <div v-if="!article" class="text-center py-20">
        <h1 class="text-3xl font-bold mb-4">Article Not Found</h1>
        <p class="mb-8 text-base-content/70">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <NuxtLink to="/blog" class="btn btn-primary"> Back to Blog </NuxtLink>
      </div>

      <div v-else>
        <div class="mb-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ article.title }}
          </h1>
          <div
            class="flex items-center justify-center gap-4 text-base-content/60 text-sm"
          >
            <span>{{
              article.date
                ? new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : ''
            }}</span>
          </div>
        </div>

        <div class="prose prose-lg max-w-4xl mx-auto">
          <ContentRenderer :value="article" />
        </div>

        <div class="mt-16 border-t border-base-300 pt-8 flex justify-between">
          <NuxtLink to="/blog" class="btn btn-outline">
            ← Back to Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const article = await queryCollection('blog').path(`/blog/${slug}`).first()

if (!article) {
  console.warn(`Article with slug "${slug}" not found.`)
}

useSeoMeta({
  title: article?.title || 'Article Not Found',
  description:
    article?.description ||
    "The blog post you're looking for could not be found.",
})
</script>

<style scoped>
.prose {
  max-width: 100%;
}

.prose img {
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.prose :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.prose :deep(h2) {
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.prose :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose :deep(h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.prose :deep(p) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(ul) {
  list-style-type: disc;
}

.prose :deep(ol) {
  list-style-type: decimal;
}

.prose :deep(li) {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.prose :deep(blockquote) {
  border-left: 4px solid rgba(156, 163, 175, 0.5);
  padding-left: 1rem;
  font-style: italic;
  margin: 1.5rem 0;
  color: rgba(107, 114, 128);
}

.prose :deep(code) {
  font-family: monospace;
  background-color: rgba(209, 213, 219, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose :deep(pre) {
  background-color: rgba(31, 41, 55, 0.9);
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.prose :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: rgba(229, 231, 235);
  font-size: 0.875em;
}
</style>
