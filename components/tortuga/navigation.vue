<template>
    <div>
        <nav v-bind:class="`hidden ${subHeader ? 'md:grid' : 'md:grid'}`">
            <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
                :style="`animation-delay:${getDelay()}ms;animation-fill-mode: backwards;`"
                :class="`text-xl uppercase text-mastheadNavLinks mb-2 mx-2 font-primary text-right animate-fadeIn`">
                {{ link.name }}</NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
let delay = 200;
const appConfig = useAppConfig()
const props = defineProps({
    subHeader: Boolean
})

function getDelay() {
    delay = delay + 100;
    return delay
}
</script>