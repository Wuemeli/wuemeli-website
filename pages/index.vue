<template>
  <DesktopLoadingScreen />
  <div class="desktop-container w-full min-h-screen">
    <DesktopBackground>
      <DesktopIcons>
        <div
          v-for="icon in desktopIcons"
          :key="icon.id"
          :style="{
            left: `${icon.position.x}px`,
            top: `${icon.position.y}px`,
            position: 'absolute',
            width: '80px',
            textAlign: 'center',
          }"
        >
          <DesktopIcon
            :label="icon.label"
            :color="icon.color"
            @click="openWindow(icon.id, icon.title, icon.component, icon.icon)"
          >
            <template #icon>
              <component :is="icon.icon" />
            </template>
          </DesktopIcon>
        </div>
      </DesktopIcons>

      <template v-for="window in activeWindows" :key="window.id">
        <DesktopWindow
          :isVisible="window.isVisible"
          :position="window.position"
          :title="window.title"
          @close="closeWindow(window.id)"
          @positionchanged="updateWindowPosition(window.id, $event)"
        >
          <component :is="window.component" />
        </DesktopWindow>
      </template>

      <DesktopTaskbar
        :activeWindows="visibleActiveWindows"
        @window-focus="focusWindow"
        @open-window="openWindow"
      />
    </DesktopBackground>
  </div>
</template>

<script>
import { DesktopLoadingScreen } from '#components'

export default {
  setup() {
    const windowManager = useWindowManager()
    return {
      windowManager,
    }
  },
  data() {
    return {
      activeWindows: [],
      desktopIcons: [],
    }
  },
  computed: {
    visibleActiveWindows() {
      return this.activeWindows.filter((w) => w.isVisible)
    },
  },
  methods: {
    focusWindow(id) {
      const window = this.activeWindows.find((w) => w.id === id)
      if (window) {
        windowManager.focusWindow(window)
      }
    },

    openWindow(id, title, component, icon) {
      const existingWindow = this.activeWindows.find((w) => w.id === id)

      const resolveComponent = () => {
        return markRaw(
          defineAsyncComponent(() => import(`@/components/${component}.vue`)),
        )
      }

      if (existingWindow) {
        existingWindow.isVisible = true
      } else {
        const position = this.findOptimalWindowPosition()
        console.log(position)

        this.activeWindows.push({
          id,
          title,
          icon,
          component: resolveComponent(),
          isVisible: true,
          position,
        })
      }

      if (typeof plausible === 'function') {
        plausible(`${title} Window Opened`)
      }
    },

    // Thanks ChatGPT :)
    findOptimalWindowPosition() {
      const gridSize = 50
      const windowWidth = 600
      const windowHeight = 400
      const screenPadding = 20

      const viewportWidth = window.innerWidth - screenPadding * 2
      const viewportHeight = window.innerHeight - screenPadding * 2

      const maxCols = Math.floor(viewportWidth / gridSize)
      const maxRows = Math.floor(viewportHeight / gridSize)

      let occupancyGrid = []
      for (let i = 0; i < maxRows; i++) {
        occupancyGrid[i] = Array(maxCols).fill(false)
      }

      this.activeWindows.forEach((win) => {
        if (!win.isVisible) return

        const startCol = Math.floor((win.position.x - screenPadding) / gridSize)
        const startRow = Math.floor((win.position.y - screenPadding) / gridSize)
        const endCol = Math.min(
          maxCols - 1,
          Math.floor((win.position.x + windowWidth - screenPadding) / gridSize),
        )
        const endRow = Math.min(
          maxRows - 1,
          Math.floor(
            (win.position.y + windowHeight - screenPadding) / gridSize,
          ),
        )

        for (let r = startRow; r <= endRow; r++) {
          if (r >= 0 && r < maxRows) {
            for (let c = startCol; c <= endCol; c++) {
              if (c >= 0 && c < maxCols) {
                occupancyGrid[r][c] = true
              }
            }
          }
        }
      })

      for (let r = 0; r < maxRows - Math.ceil(windowHeight / gridSize); r++) {
        for (let c = 0; c < maxCols - Math.ceil(windowWidth / gridSize); c++) {
          let canFit = true

          for (
            let i = r;
            i < r + Math.ceil(windowHeight / gridSize) && canFit;
            i++
          ) {
            for (
              let j = c;
              j < c + Math.ceil(windowWidth / gridSize) && canFit;
              j++
            ) {
              if (i >= maxRows || j >= maxCols || occupancyGrid[i][j]) {
                canFit = false
              }
            }
          }

          if (canFit) {
            return {
              x: c * gridSize + screenPadding,
              y: r * gridSize + screenPadding,
            }
          }
        }
      }

      const offset = (this.activeWindows.length % 10) * 30
      return {
        x: screenPadding + offset,
        y: screenPadding + offset,
      }
    },

    closeWindow(id) {
      const windowIndex = this.activeWindows.findIndex((w) => w.id === id)
      if (windowIndex >= 0) {
        this.activeWindows[windowIndex].isVisible = false

        if (typeof plausible === 'function') {
          plausible(`${this.activeWindows[windowIndex].title} Window Closed`)
        }
      }
    },

    updateWindowPosition(id, position) {
      const window = this.activeWindows.find((w) => w.id === id)
      if (window) {
        window.position = position
      }
    },

    generateIconPosition(index) {
      const x = 40
      const y = 40 + index * 90
      return { x, y }
    },

    initializeIcons() {
      this.desktopIcons = iconDefinitions.map((icon, index) => {
        return {
          ...icon,
          position: this.generateIconPosition(index),
        }
      })
    },
  },
  mounted() {
    this.initializeIcons()
  },
}
</script>

<style>
.desktop-container {
  position: relative;
  cursor: default;
}
</style>
