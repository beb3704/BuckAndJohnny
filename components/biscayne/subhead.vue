<template>
    <div class="grid grid-cols-2 gap-y-8">
        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image" class="z-0">
        </MediaBackgroundimage>
        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background" class="z-10">
        </MediaBackgroundimage>
        <BiscayneNavigation :sub-header="true" class="p-4 z-20 lg:row-start-1 lg:col-start-2 "></BiscayneNavigation>
        <BiscayneExternallinkbutton text="build & price a pool" url="https://google.com"
            class="animate-bounce pt-5 mr-1 justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full z-40 lg:self-end">
        </BiscayneExternallinkbutton>

        <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
            class="justify-self-center self-center col-span-full w-44 md:w-52 lg:w-64 h-auto lg:justify-self-start lg:row-start-1">
        </NuxtImg>

        <ElementH1
            class="text-center m-4 self-center col-span-full lg:col-span-1 lg:justify-self-start lg:row-start-2 lg:mt-20">
            {{
    title
            }}
        </ElementH1>
    </div>
</template>



<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

