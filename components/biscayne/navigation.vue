<template>
    <nav v-bind:class="`hidden  ${subHeader ? 'md:grid lg:grid-flow-col' : 'md:grid'}`">
        <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-xl uppercase font-bold text-mastheadNavLinks mb-2 mx-2 font-primary">
            {{ link.name }}</NuxtLink>
    </nav>
</template>

<script setup lang="ts">

const appConfig = useAppConfig()
const props = defineProps({
    subHeader: Boolean

})
</script>