<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center animate-wiggle">
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Stats 💻</p>
      <br />
      <img src="https://stats.dooboo.io/api/github-stats-advanced?login=wuemeli" alt="Github Stats" class="w-30 h-auto" />
    </div>
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Streak 🔥</p>
      <br />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false" alt="Github Streak" class="w-30 h-auto" />
    </div>
  <p class="text-sm text-gray-500">(My open-source statistics. These statistics do not reflect my actual coding activity)</p>
    </div>
</template>

<script>
export default {
  name: 'GithubPage',
  head: {
    title: 'Github Stats 💻',
  },
}
</script>
