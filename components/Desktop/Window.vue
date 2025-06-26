<template>
  <div
    v-if="isVisible"
    class="window-container"
    :style="{
      top: position.y + 'px',
      left: position.x + 'px',
      width: size.width + 'px',
      height: size.height + 'px',
      opacity: transparency,
      zIndex: isActive ? 200 : 100,
    }"
    @mousedown.stop="activateWindow"
  >
    <div class="window-header" @mousedown.stop="startDrag">
      <div class="window-title">{{ title }}</div>
      <div class="window-controls">
        <button class="window-control-btn minimize-btn" @click="minimize">
          <div class="minimize-icon"></div>
        </button>
        <button class="window-control-btn maximize-btn" @click="toggleMaximize">
          <div class="maximize-icon"></div>
        </button>
        <button class="window-close-btn" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="window-content">
      <slot></slot>
    </div>
    <div
      class="resize-handle resize-handle-se"
      @mousedown.stop="startResize($event, 'se')"
    ></div>
    <div
      class="resize-handle resize-handle-sw"
      @mousedown.stop="startResize($event, 'sw')"
    ></div>
    <div
      class="resize-handle resize-handle-ne"
      @mousedown.stop="startResize($event, 'ne')"
    ></div>
    <div
      class="resize-handle resize-handle-nw"
      @mousedown.stop="startResize($event, 'nw')"
    ></div>
    <div
      class="resize-handle resize-handle-n"
      @mousedown.stop="startResize($event, 'n')"
    ></div>
    <div
      class="resize-handle resize-handle-s"
      @mousedown.stop="startResize($event, 's')"
    ></div>
    <div
      class="resize-handle resize-handle-e"
      @mousedown.stop="startResize($event, 'e')"
    ></div>
    <div
      class="resize-handle resize-handle-w"
      @mousedown.stop="startResize($event, 'w')"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Object,
      default: () => ({ x: 50, y: 50 }),
    },
    title: {
      type: String,
      default: 'Window',
    },
    initialSize: {
      type: Object,
      default: () => ({ width: 800, height: 600 }),
    },
    initialTransparency: {
      type: Number,
      default: 0.95,
    },
  },
  data() {
    return {
      isDragging: false,
      isResizing: false,
      isActive: true,
      isMaximized: false,
      prevSize: null,
      prevPosition: null,
      resizeDirection: '',
      dragOffset: { x: 0, y: 0 },
      size: { width: this.initialSize.width, height: this.initialSize.height },
      transparency: this.initialTransparency,
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.centerWindow()
    }
  },
  methods: {
    activateWindow() {
      this.isActive = true
      this.$emit('activate')
    },
    centerWindow() {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const x = Math.max(0, (viewportWidth - this.size.width) / 2)
      const y = Math.max(0, (viewportHeight - this.size.height) / 2)
      this.$emit('positionchanged', { x, y })
    },
    toggleMaximize() {
      if (this.isMaximized) {
        this.size = { ...this.prevSize }
        this.$emit('positionchanged', this.prevPosition)
      } else {
        this.prevSize = { ...this.size }
        this.prevPosition = { ...this.position }

        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        this.size = { width: viewportWidth, height: viewportHeight }
        this.$emit('positionchanged', { x: 0, y: 0 })
      }
      this.isMaximized = !this.isMaximized
      this.$emit('sizechanged', this.size)
    },
    minimize() {
      this.$emit('minimize')
    },
    startDrag(event) {
      this.isDragging = true
      this.dragOffset = {
        x: event.clientX - this.position.x,
        y: event.clientY - this.position.y,
      }

      window.addEventListener('mousemove', this.onDrag)
      window.addEventListener('mouseup', this.stopDrag)

      event.preventDefault()
    },
    onDrag(event) {
      if (this.isDragging) {
        const newPosition = {
          x: Math.max(0, event.clientX - this.dragOffset.x),
          y: Math.max(0, event.clientY - this.dragOffset.y),
        }

        if (typeof window !== 'undefined') {
          const maxX = window.innerWidth - 100
          const maxY = window.innerHeight - 50
          newPosition.x = Math.min(newPosition.x, maxX)
          newPosition.y = Math.min(newPosition.y, maxY)
        }

        this.$emit('positionchanged', newPosition)
      } else if (this.isResizing) {
        this.handleResize(event)
      }
    },
    stopDrag() {
      this.isDragging = false
      this.isResizing = false
      window.removeEventListener('mousemove', this.onDrag)
      window.removeEventListener('mouseup', this.stopDrag)
    },
    startResize(event, direction) {
      this.isResizing = true
      this.resizeDirection = direction
      this.dragOffset = {
        x: event.clientX,
        y: event.clientY,
      }

      window.addEventListener('mousemove', this.onDrag)
      window.addEventListener('mouseup', this.stopDrag)
      event.preventDefault()
    },
    handleResize(event) {
      const minWidth = 200
      const minHeight = 150
      const deltaX = event.clientX - this.dragOffset.x
      const deltaY = event.clientY - this.dragOffset.y

      let newWidth = this.size.width
      let newHeight = this.size.height
      let newX = this.position.x
      let newY = this.position.y

      if (this.resizeDirection.includes('e')) {
        newWidth = Math.max(minWidth, this.size.width + deltaX)
      } else if (this.resizeDirection.includes('w')) {
        const possibleWidth = Math.max(minWidth, this.size.width - deltaX)
        if (possibleWidth !== minWidth || deltaX < 0) {
          newX = this.position.x + deltaX
          newWidth = possibleWidth
        }
      }

      if (this.resizeDirection.includes('s')) {
        newHeight = Math.max(minHeight, this.size.height + deltaY)
      } else if (this.resizeDirection.includes('n')) {
        const possibleHeight = Math.max(minHeight, this.size.height - deltaY)
        if (possibleHeight !== minHeight || deltaY < 0) {
          newY = this.position.y + deltaY
          newHeight = possibleHeight
        }
      }

      this.size = { width: newWidth, height: newHeight }
      this.$emit('sizechanged', this.size)

      if (newX !== this.position.x || newY !== this.position.y) {
        this.$emit('positionchanged', { x: newX, y: newY })
      }

      this.dragOffset = {
        x: event.clientX,
        y: event.clientY,
      }
    },
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.onDrag)
    window.removeEventListener('mouseup', this.stopDrag)
  },
}
</script>

<style scoped>
.window-container {
  position: absolute;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(222, 226, 230, 0.7);
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  min-height: 150px;
  overflow: hidden;
  z-index: 100;
  transition:
    box-shadow 0.2s ease,
    transform 0.1s ease;
}

.window-container:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: move;
  user-select: none;
  height: 36px;
  border-bottom: 1px solid rgba(222, 226, 230, 0.7);
}

.window-title {
  font-weight: 500;
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.window-controls {
  display: flex;
  align-items: center;
}

.window-control-btn,
.window-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #495057;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-left: 4px;
}

.window-control-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.window-close-btn:hover {
  background-color: #dc3545;
  color: white;
}

.minimize-icon {
  width: 10px;
  height: 2px;
  background-color: #495057;
}

.maximize-icon {
  width: 10px;
  height: 10px;
  border: 1px solid #495057;
}

.window-content {
  padding: 1rem;
  overflow: auto;
  height: calc(100% - 36px);
  box-sizing: border-box;

  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent; /* For Firefox */
}

.window-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.window-content::-webkit-scrollbar-track {
  background: transparent;
}

.window-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 2px solid transparent;
}

.window-content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.resize-handle {
  position: absolute;
  background-color: transparent;
  z-index: 1;
}

.resize-handle-e {
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: e-resize;
}

.resize-handle-w {
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  cursor: w-resize;
}

.resize-handle-n {
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  cursor: n-resize;
}

.resize-handle-s {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  cursor: s-resize;
}

.resize-handle-se {
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: se-resize;
}

.resize-handle-sw {
  bottom: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: sw-resize;
}

.resize-handle-ne {
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: ne-resize;
}

.resize-handle-nw {
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: nw-resize;
}
</style>
