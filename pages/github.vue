<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center">
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Stats 💻</p>
      <br />
      <img src="https://github-readme-stats.vercel.app/api?username=wuemeli&show_icons=true&theme=radical&border=false" alt="Github Stats" class="w-30 h-auto" />
    </div>
    <div class="flex flex-col items-center">
      <p class="font-semibold">My Github Streak 🔥</p>
      <br />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=Wuemeli&theme=radical&border=false" alt="Github Streak" class="w-30 h-auto" />
    </div>
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
