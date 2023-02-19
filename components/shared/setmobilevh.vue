<template></template>
<script setup lang="ts">
const innerHeight = ref(0);
watchEffect(() => {
    document.documentElement.style.setProperty('--vh', `${innerHeight.value}px`);
});

onMounted(() => {
    innerHeight.value = window.innerHeight;
})
</script>



