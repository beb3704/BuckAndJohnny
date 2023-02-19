<template>
    <div class="grid grid-cols-[1fr_2fr]">
        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image" class="z-0">
        </MediaBackgroundimage>
        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background" class="z-10">
        </MediaBackgroundimage>

        <TortugaNavigation :sub-header="true" class="md:mt-2 z-30"></TortugaNavigation>

        <ElementButton text="build & price a pool" url="https://google.com"
            class="z-30 animate-smallBounceUp col-span-full row-start-2 mb-4 mt-10 md:row-start-2 md:col-span-1 md:col-start-2 md:self-end md:justify-self-end">
        </ElementButton>

        <NuxtLink to="/" class="z-30 row-start-1">
            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="w-44 md:w-52 lg:w-64 h-auto z-20">
            </NuxtImg>
        </NuxtLink>

        <h1
            class="z-30 uppercase font-bold text-subHeaderTitle font-primary row-start-1 text-2xl text-right mr-4 self-center md:row-start-2 md:justify-self-start md:ml-4 md:text-4xl md:self-end md:mb-4">
            {{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

