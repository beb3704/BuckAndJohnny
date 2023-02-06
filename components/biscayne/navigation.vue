<template>
    <nav v-bind:class="`hidden  ${subHeader ? 'lg:flex justify-end' : 'lg:grid'}`">
        <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-xl uppercase font-bold text-mastheadNavLinks mb-2 mx-2 font-primary">
            {{ link.name }}</NuxtLink>
    </nav>
</template>

<script setup lang="ts">
import { booleanLiteral } from '@babel/types';

const appConfig = useAppConfig()
const props = defineProps({
    subHeader: Boolean

})
</script>