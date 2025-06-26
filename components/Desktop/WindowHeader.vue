<template>
  <div
    class="window-header bg-gray-800 p-3 flex items-center justify-between rounded-t-lg border-b border-gray-700 cursor-move"
    @mousedown="$emit('dragstart', $event)"
    @touchstart="$emit('dragstart', $event)"
  >
    <div class="flex items-center">
      <div class="window-dots flex space-x-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <h3 class="ml-4 text-light-gray font-medium">{{ title }}</h3>
    </div>
    <button @click.stop="$emit('close')" class="text-gray-400 hover:text-white cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Window'
    }
  },
  emits: ['close', 'dragstart']
}
</script>