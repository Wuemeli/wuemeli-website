<template>
  <div
    v-if="isOpen"
    class="start-menu absolute bottom-12 left-4 bg-gray-900/95 border border-gray-700 rounded-t-lg shadow-xl w-72 overflow-hidden z-20"
  >
    <div class="spotify-container p-3 border-b border-gray-700 bg-gray-800/50">
      <NuxtImg
        src="https://spotify-github-profile.kittinanx.com/api/view?uid=d1ytrh3gx9xa7mzw79h2mbeqi&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false"
        alt="Spotify GitHub Profile"
        class="w-full"
        preload
        loading="eager"
      />
    </div>

    <div class="menu-sections">
      <div v-for="category in categories" :key="category" class="section">
        <div
          class="section-header px-4 py-2 bg-purple-800/40 text-white font-medium"
        >
          {{ category }}
        </div>
        <div class="section-items">
          <div
            v-for="item in getItemsByCategory(category)"
            :key="item.id"
            class="menu-item px-4 py-2 hover:bg-gray-700 text-white flex items-center cursor-pointer"
            @click="selectMenuItem(item)"
          >
            <div class="w-6 h-6 mr-2">
              <component class="w-full h-full" :is="item.icon" />
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { iconDefinitions } from '~/composables/iconDef';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['select-item', 'close']);

const categories = computed(() => {
  const uniqueCategories = [...new Set(iconDefinitions.map(item => item.category))];
  return uniqueCategories;
});

const getItemsByCategory = (category) => {
  return iconDefinitions.filter(item => item.category === category);
};

const selectMenuItem = (item) => {
  emit('select-item', item);
  emit('close');
};
</script>

<style scoped>
.start-menu {
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.menu-sections {
  flex: 1;
  overflow-y: auto;
}

.section:not(:last-child) {
  border-bottom: 1px solid rgba(75, 85, 99, 0.4);
}

.menu-item {
  transition: background-color 0.15s ease;
}
</style>