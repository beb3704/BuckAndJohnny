<template>
    <div class="h-[90vh] lg:h-screen relative">
        <div class="z-40 relative grid grid-cols-2 w-full h-full grid-rows-3">

            <BiscayneNavigation class="p-4 justify-self-start self-start"></BiscayneNavigation>

            <ElementButton text="build & price a pool" url="components"
                class="animate-bounce mt-5 mr-1 justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full">
            </ElementButton>

            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/poolcorp-logo.png" alt="logo"
                class="justify-self-center self-center col-span-full w-52 md:w-60 lg:w-80 h-auto">
            </NuxtImg>

            <div class="col-span-full justify-self-center self-end bg-backgroundDark py-3 px-10 lg:py-6 lg:px-30">
                <h1
                    class="text-mastheadTitle text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-center lg:tracking-widest font-primary">
                    Swimming
                    pool pros
                </h1>
                <h2 class="text-mastheadTitle lg:text-2xl uppercase text-center lg:tracking-[.5em] font-primary">serving
                    the gulf
                    coast
                </h2>
            </div>
        </div>

        <MediaBackgroundimage url="/masthead/background.jpg" alt="background tree" class="z-0"></MediaBackgroundimage>

        <MediaBackgroundvideo class="z-10">
            <source src="/masthead/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>

        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background tree" class="z-30">
        </MediaBackgroundimage>
    </div>
</template>

<script setup lang="ts">


</script>
