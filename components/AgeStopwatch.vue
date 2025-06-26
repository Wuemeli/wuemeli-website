<template>
    <span class="font-mono text-light-gray text-lg">
        {{ formattedAge }}
    </span>
</template>

<script setup>
const age = ref(0);
const formattedAge = ref("16.00000000");

const birthDate = new Date("2008-09-01T00:00:00Z");

let intervalId = null;

const calculateAge = () => {
    const now = new Date();
    const diffInMs = now.getTime() - birthDate.getTime();
    const ageInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    age.value = ageInYears;
    formattedAge.value = ageInYears.toFixed(9);
};

onMounted(() => {
    calculateAge();
    intervalId = setInterval(calculateAge, 1);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>
