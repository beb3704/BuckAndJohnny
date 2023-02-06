<template>
    <div class="grid">
        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image" class="z-0">
        </MediaBackgroundimage>
        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background" class="z-30">
        </MediaBackgroundimage>

        <BiscayneExternallinkbutton text="build & price a pool" url="https://google.com"
            class="animate-bounce pt-5 mr-1 justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full z-40">
        </BiscayneExternallinkbutton>

        <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
            class="justify-self-center self-center col-span-full w-44 md:w-52 lg:w-64 h-auto mt-10">
        </NuxtImg>

        <ElementH1 class="text-center m-4">{{ title }}</ElementH1>
    </div>
</template>



<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

