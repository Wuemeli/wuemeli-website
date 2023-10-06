<template>
  <div class="max-w-4xl px-10 mx-auto space-y-8 text-center animate-shake">
    <p class="font-semibold">My Coding Stats 📊</p>
    <div class="flex flex-col items-center">
      <img
        src="https://github-readme-stats.vercel.app/api/wakatime?username=wuemeli&theme=radical"
        alt="Wuemelis Wakatime Stats"
        class="w-30 h-auto"
      />
      <br>
      <p class="text-sm text-gray-500">(This shows my coding activity over the last 7 days)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodingStatsPage',
  head: {
    title: 'Coding Stats 📊',
  },
}
</script>
