<template>
    <div class="grid grid-cols-2 gap-y-8 lg:rounded-b-[40%] rounded-b-[25%]">

        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image"
            class="z-0 lg:rounded-b-[40%] rounded-b-[25%] opacity-50">
        </MediaBackgroundimage>
        <!-- <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background"
            class="z-10 lg:rounded-b-[40%] rounded-b-[25%]">
        </MediaBackgroundimage> -->


        <div class="h-8 absolute w-full top-0 left-0">
            <MediaBackgroundimage url="/masthead/marlin/topstripes.png" alt="background stripes"
                class="z-0 hidden lg:block">
            </MediaBackgroundimage>
        </div>

        <NuxtLink to="/"
            class="justify-self-start self-center col-span-full block lg:justify-self-start lg:row-start-1 z-10 lg:ml-10 p-4">
            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="w-44 md:w-52 lg:w-64 h-auto">
            </NuxtImg>
        </NuxtLink>

        <MarlinNavigation :sub-header="true" class="p-4 z-20 lg:row-start-1 lg:col-start-2 mt-10 "></MarlinNavigation>

        <div class="col-span-full z-50">
            <h1
                class="text-center m-4 self-center col-span-full lg:col-span-1 animate-fadeIn
            lg:justify-self-start lg:row-start-2  text-4xl md:text-5xl uppercase font-bold text-subHeaderTitle font-primary mb-8">
                {{ title }}
            </h1>
            <ElementButton text="build & price a pool" url="https://google.com"
                class="animate-bounce pt-5 mr-1 justify-self-start 
            lg:justify-self-end self-start lg:col-span-1 col-span-full z-40 lg:self-end lg:row-start-2 lg:col-start-2 mb-14">
            </ElementButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

