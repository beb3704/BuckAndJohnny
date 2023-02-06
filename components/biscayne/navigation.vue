<template>
    <nav class="hidden lg:grid">
        <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-xl uppercase font-bold text-mastheadNavLinks mb-2 font-primary">
            {{ link.name }}</NuxtLink>
    </nav>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

</script>