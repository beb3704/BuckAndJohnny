<template>
    <div class="grid grid-cols-2 gap-y-8">
        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image" class="z-0">
        </MediaBackgroundimage>
        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background" class="z-10">
        </MediaBackgroundimage>
        <TortugaNavigation :sub-header="true" class="p-4 z-20 lg:row-start-1 lg:col-start-2 "></TortugaNavigation>
        <ElementButton text="build & price a pool" url="https://google.com"
            class="animate-bounce pt-5 mr-1 justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full z-40 lg:self-end lg:row-start-2 lg:col-start-2">
        </ElementButton>

        <NuxtLink to="/"
            class="justify-self-center self-start col-span-full block lg:justify-self-start lg:row-start-1 z-10">
            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="w-44 md:w-52 lg:w-64 h-auto">
            </NuxtImg>
        </NuxtLink>

        <h1
            class="text-center m-4 self-center col-span-full lg:col-span-1 
                        lg:justify-self-start lg:row-start-2 lg:mt-20 text-4xl md:text-5xl uppercase font-bold text-subHeaderTitle font-primary">
            {{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

