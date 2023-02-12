<template>
    <nav v-bind:class="`hidden  ${subHeader ? 'lg:grid' : 'lg:grid'}`">
        <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-lg uppercase text-mastheadNavLinks mb-2 mx-2 font-primary text-right">
            {{ link.name }}</NuxtLink>
    </nav>
</template>

<script setup lang="ts">

const appConfig = useAppConfig()
const props = defineProps({
    subHeader: Boolean
})
</script>