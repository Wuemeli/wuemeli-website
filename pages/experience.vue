<template>
  <div class="max-w-6xl mx-auto py-10 text-center">
    <div class="flex flex-wrap justify-center items-center space-x-6">
      <div class="flex items-center">
        <NuxtImg src="/icons/linux.svg" alt="Linux Icon" class="h-12 w-12" />
        <span class="ml-4 text-xl font-semibold text-light-gray">Linux</span>
      </div>
      <div class="flex items-center">
        <NuxtImg src="/icons/bun.svg" alt="Bun Icon" class="h-12 w-12" />
        <span class="ml-4 text-xl font-semibold text-light-gray"
          >Bun/Node.js</span
        >
      </div>
      <div class="flex items-center">
        <NuxtImg
          src="/icons/js.svg"
          alt="JavaScript Icon"
          class="h-12 w-12"
        />
        <span class="ml-4 text-xl font-semibold text-light-gray"
          >JavaScript/TS</span
        >
      </div>
      <div class="flex items-center">
        <NuxtImg src="/icons/vue.svg" alt="Vue Icon" class="h-12 w-12" />
        <span class="ml-4 text-xl font-semibold text-light-gray">VueJS</span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center space-x-6 mt-6">
      <div class="flex items-center">
        <NuxtImg
          src="/icons/discordjs.svg"
          alt="Discordjs Icon"
          class="h-12 w-12"
        />
        <span class="ml-4 text-xl font-semibold text-light-gray"
          >Discord.js</span
        >
      </div>
      <div class="flex items-center">
        <NuxtImg
          src="/icons/mongodb.svg"
          alt="MongoDB Icon"
          class="h-12 w-12"
        />
        <span class="ml-4 text-xl font-semibold text-light-gray">MongoDB</span>
      </div>
      <div class="flex items-center">
        <NuxtImg
          src="/icons/github.svg"
          alt="GitHub Icon"
          class="h-12 w-12"
        />
        <span class="ml-4 text-xl font-semibold text-light-gray">GitHub</span>
      </div>
      <div class="flex items-center">
        <NuxtImg
          src="/icons/nuxtjs.svg"
          alt="NuxtJS Icon"
          class="h-12 w-12"
        />
        <span class="ml-4 text-xl font-semibold text-light-gray">NuxtJS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  head: {
    title: 'Experience 🔥',
  },
}
</script>
