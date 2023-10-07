<template>
  <div class="flex min-h-screen">
    <div class="flex">
      <div></div>
    </div>
    <div class="flex flex-col justify-between flex-1">
      <Navigation />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.clickSound = new Audio('/audio/click.wav');
    window.addEventListener('click', this.playSound);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.playSound);
  },
  methods: {
    playSound() {
      this.clickSound.play();
    },
  },
};
</script>

<style>
@import url('~/assets/css/main.css');
</style>
