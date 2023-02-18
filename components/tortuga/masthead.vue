<template>
    <div class="h-[90vh] lg:h-screen relative clip">
        <div class="z-40 relative grid grid-cols-2 w-full h-full grid-rows-3 ">

            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="w-52 md:w-60 lg:w-80 h-auto justify-self-start self-start">
            </NuxtImg>

            <TortugaNavigation class="p-4 justify-self-end self-start mt-4">
            </TortugaNavigation>

            <div class="col-span-full justify-self-center self-end  py-3 px-10 lg:py-6 lg:px-30">
                <h1
                    class="text-mastheadTitle text-3xl md:text-4xl lg:text-7xl font-bold uppercase text-center lg:tracking-widest font-primary animate-fadeIn animation-delay-500">
                    LIVE LIFE IN STYLE
                </h1>
                <h2
                    class="text-mastheadTitle lg:text-2xl uppercase text-center lg:tracking-[.5em] font-primary mt-3 animate-fadeIn animation-delay-1000">
                    WITH A CUSTOM POOL & SPA
                </h2>
            </div>

            <ElementButton text="build & price a pool" url="components"
                class="animate-bounce justify-self-center lg:justify-self-end self-center col-span-full mt-12">
            </ElementButton>

        </div>

        <MediaBackgroundimage url="/masthead/background.jpg" alt="background tree" class="z-0">
        </MediaBackgroundimage>

        <MediaBackgroundvideo class="z-10">
            <source src="/masthead/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>

        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background tree" class="z-30">
        </MediaBackgroundimage>
    </div>
</template>

<script setup lang="ts">



</script>

<style></style>
