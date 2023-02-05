<template>
    <nuxt-img class="h-full w-full absolute object-cover top-0 left-0 object-center" :src="props.url" :alt="props.alt"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" format="webp" quality="60" preload />
</template>

<script setup lang="ts">
const props = defineProps({
    url: { type: String, required: true },
    alt: { type: String, required: true }
})
</script>