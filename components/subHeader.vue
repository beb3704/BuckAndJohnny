<template>
    <div class="p-4">
        <MediaBackgroundimage alt="Delicious Pizza" url="/pizzabg.jpg" :dark-overlay="true"></MediaBackgroundimage>
        <div class="h-20"></div>
        <h1 class="text-[#fff] text-center font-bold uppercase tracking-wider text-3xl lg:text-6xl">{{ title }}</h1>
        <h2 class="text-[#fff] text-center font-bold uppercase tracking-widest lg:text-2xl">{{ subTitle }}</h2>
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
})
</script>