<template>
  <div
    class="taskbar fixed bottom-0 left-0 right-0 bg-gray-900/90 h-12 flex items-center px-4 border-t border-gray-700 z-10"
  >
    <div
      class="start-button hover:bg-purple-700 text-white px-4 py-2 rounded mr-4 cursor-pointer flex items-center"
      :class="{ 'bg-purple-800': startMenuOpen }"
      @click="toggleStartMenu"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <NuxtImg
        :src="startButtonImage"
        alt="Start Menu"
        preload
        loading="eager"
        width="30"
        height="30"
      />
    </div>

    <DesktopStartMenu
      :isOpen="startMenuOpen"
      @close="startMenuOpen = false"
      @select-item="handleMenuItemSelect"
    />

    <div class="flex-1 flex items-center gap-2 overflow-x-auto">
      <div
        v-for="window in activeWindows"
        :key="window.id"
        class="taskbar-item px-3 py-1.5 bg-gray-800 rounded flex items-center text-white text-sm border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
        :class="{ 'bg-gray-700 border-gray-500': window.isVisible }"
        @click="$emit('window-focus', window.id)"
      >
        <div class="h-5 w-5 mr-2">
          <component :is="window.icon" />
        </div>
        <span>{{ window.title }}</span>
      </div>
      <slot></slot>
    </div>

    <div class="flex items-center text-white text-sm">
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeWindows: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      time: '',
      startMenuOpen: false,
      isHovering: false,
    }
  },
  emits: ['window-focus', 'open-window'],
  mounted() {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      this.time = `${hours}:${minutes}`
    }

    updateTime()
    setInterval(updateTime, 1000)

    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  computed: {
    startButtonImage() {
      return this.startMenuOpen || this.isHovering
        ? '/desktop/arch.png'
        : '/desktop/windows10.png'
    },
  },
  methods: {
    toggleStartMenu() {
      this.startMenuOpen = !this.startMenuOpen
    },
    handleOutsideClick(event) {
      const startButton = document.querySelector('.start-button')
      const startMenu = document.querySelector('.start-menu')

      if (
        this.startMenuOpen &&
        startButton &&
        startMenu &&
        !startButton.contains(event.target) &&
        !startMenu.contains(event.target)
      ) {
        this.startMenuOpen = false
      }
    },
    handleMenuItemSelect(item) {
      const component = item.component ? markRaw(item.component) : null;
      const icon = item.icon ? markRaw(item.icon) : null;

      this.$emit('open-window', item.id, item.title, item.component, item.icon)
    },
  },
}
</script>

<style scoped>
.taskbar-item {
  min-width: 120px;
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
