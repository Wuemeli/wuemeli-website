<template>
  <div
    v-if="isVisible"
    class="window-container absolute"
    :style="{ top: position.y + 'px', left: position.x + 'px', width: width + 'px' }"
    :class="{ 'cursor-move': isDragging }"
  >
    <WindowHeader
      :title="title"
      @close="$emit('close')"
      @dragstart="startDrag"
    />

    <div class="window-content bg-gray-800 p-6 rounded-b-lg border-2 border-t-0 border-gray-700 overflow-y-auto" :style="{ maxHeight: maxHeight + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    WindowHeader
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Window'
    },
    width: {
      type: Number,
      default: 600
    },
    maxHeight: {
      type: Number,
      default: 500
    },
    initialPosition: {
      type: Object,
      default: () => ({ x: 100, y: 100 })
    }
  },
  emits: ['close', 'dragstart', 'dragend', 'positionchanged'],
  data() {
    return {
      position: { ...this.initialPosition },
      isDragging: false,
      dragOffset: { x: 0, y: 0 }
    }
  },
  watch: {
    initialPosition: {
      handler(newPosition) {
        this.position = { ...newPosition };
      },
      deep: true
    }
  },
  methods: {
    startDrag(event) {
      event.preventDefault();

      const clientX = event.clientX || event.touches[0].clientX;
      const clientY = event.clientY || event.touches[0].clientY;

      this.dragOffset = {
        x: clientX - this.position.x,
        y: clientY - this.position.y
      };

      this.isDragging = true;
      this.$emit('dragstart');

      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('touchmove', this.onDrag);
      window.addEventListener('mouseup', this.stopDrag);
      window.addEventListener('touchend', this.stopDrag);
    },
    onDrag(event) {
      if (!this.isDragging) return;

      const clientX = event.clientX || event.touches[0].clientX;
      const clientY = event.clientY || event.touches[0].clientY;

      this.position = {
        x: clientX - this.dragOffset.x,
        y: clientY - this.dragOffset.y
      };

      this.$emit('positionchanged', this.position);
    },
    stopDrag() {
      this.isDragging = false;
      this.$emit('dragend');

      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('touchmove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDrag);
      window.removeEventListener('touchend', this.stopDrag);
    }
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.onDrag);
    window.removeEventListener('touchmove', this.onDrag);
    window.removeEventListener('mouseup', this.stopDrag);
    window.removeEventListener('touchend', this.stopDrag);
  }
}
</script>

<style scoped>
.window-container {
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  animation: windowOpen 0.3s ease-out forwards;
  z-index: 50;
}

.window-container:hover {
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.7);
}

@keyframes windowOpen {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>