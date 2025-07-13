<template>
    <span
        class="inline-flex items-center gap-1 font-semibold"
        :class="colorClass"
    >
        <NuxtImg
            v-if="icon && !emoji"
            :src="icon"
            :alt="name"
            class="w-6 h-6 inline-block align-middle"
        />
        <span v-else-if="emoji" class="text-lg align-middle">{{ emoji }}</span>
        {{ name }}
    </span>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        name: string;
        icon?: string;
        emoji?: string;
        color?: string;
    }>(),
    {
        color: "gray",
    },
);

const colorClass = computed(() => {
    const colorMap = {
        green: "text-green-300",
        blue: "text-blue-300",
        red: "text-red-300",
        yellow: "text-yellow-300",
        orange: "text-orange-300",
        purple: "text-purple-300",
        cyan: "text-cyan-300",
        gray: "text-gray-300",
    };
    return colorMap[props.color] || "text-gray-300";
});
</script>
