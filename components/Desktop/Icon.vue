<template>
  <div
    class="desktop-icon flex flex-col items-center cursor-pointer hover:bg-white/10 p-2 rounded transition-colors"
    @click="$emit('click')"
  >
    <div
      class="icon-image text-white rounded p-2 flex items-center justify-center mb-1"
      :class="[`bg-${color}-500`]"
    >
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </slot>
    </div>
    <span class="icon-label text-sm text-white font-medium drop-shadow-md">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue',
      validator: (value) => ['blue', 'green', 'purple', 'yellow', 'red', 'gray'].includes(value)
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.icon-label {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
}

.icon-image {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>