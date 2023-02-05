<template>
    <nav class="hidden lg:grid">
        <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-xl uppercase font-bold text-primary mb-2">
            {{ link.name }}</NuxtLink>
    </nav>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

</script>