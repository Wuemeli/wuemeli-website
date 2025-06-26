<template>
  <div
    class="desktop-bg w-full min-h-screen relative"
    :style="{
      backgroundImage: `url('/img/Backyard.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    @mousedown="startSelection"
    @mousemove="updateSelection"
    @mouseup="endSelection"
    @mouseleave="endSelection"
  >
    <div
      class="age-display flex flex-col items-center justify-center absolute inset-0 pointer-events-none"
    >
      <h1 class="text-3xl font-bold text-white mb-2">Hello, I'm Wuemeli</h1>
      <p class="text-2xl text-white">{{ age }}</p>
    </div>

    <div
      v-if="isSelecting"
      class="selection-box absolute border border-blue-500 bg-blue-200 bg-opacity-30"
      :style="{
        left: `${Math.min(selectionStart.x, selectionCurrent.x)}px`,
        top: `${Math.min(selectionStart.y, selectionCurrent.y)}px`,
        width: `${Math.abs(selectionCurrent.x - selectionStart.x)}px`,
        height: `${Math.abs(selectionCurrent.y - selectionStart.y)}px`,
      }"
    ></div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: '',
      timer: null,
      isSelecting: false,
      selectionStart: { x: 0, y: 0 },
      selectionCurrent: { x: 0, y: 0 },
    }
  },

  mounted() {
    this.calculateAge()
    this.timer = setInterval(this.calculateAge, 100)
  },

  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },

  methods: {
    calculateAge() {
      const birthDate = new Date(2008, 8, 1)
      const now = new Date()

      let years = now.getFullYear() - birthDate.getFullYear()

      if (
        now <
        new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate())
      ) {
        years--
      }

      const ageMs = now - birthDate
      const seconds = ageMs / 100

      this.age = `${years}.${seconds.toFixed(0).padStart(3, '000')} years old`
    },

    startSelection(event) {
      this.isSelecting = true
      this.selectionStart = {
        x: event.clientX,
        y: event.clientY,
      }
      this.selectionCurrent = {
        x: event.clientX,
        y: event.clientY,
      }
    },

    updateSelection(event) {
      if (this.isSelecting) {
        this.selectionCurrent = {
          x: event.clientX,
          y: event.clientY,
        }
      }
    },

    endSelection() {
      this.isSelecting = false
    }
  },
}
</script>

<style scoped>
.desktop-bg {
  background-color: #123456;
}

.selection-box {
  pointer-events: none;
  z-index: 5;
}
</style>