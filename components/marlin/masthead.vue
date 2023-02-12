<template>
    <div class="h-[90vh] lg:h-screen relative clip">
        <div class="z-40 relative grid grid-cols-2 w-full h-full grid-rows-3">

            <div class="h-8 absolute w-full top-0 left-0">
                <MediaBackgroundimage url="/masthead/marlin/topstripes.png" alt="background stripes" class="z-0">
                </MediaBackgroundimage>
            </div>
            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="w-52 md:w-60 lg:w-80 h-auto justify-self-start self-start m-10">
            </NuxtImg>

            <MarlinNavigation class="p-4 justify-self-end self-start mt-8">
            </MarlinNavigation>





            <div class="col-span-full justify-self-center self-center  py-3 px-10 lg:py-6 lg:px-30">
                <h1 class="text-mastheadTitle text-2xl 
                    md:text-4xl lg:text-6xl font-bold uppercase 
                    text-center lg:tracking-widest font-primary
                    animate-fadeIn animation-delay-500">
                    PLAN YOUR DREAM BACKYARD
                </h1>
                <h2
                    class="text-mastheadTitle lg:text-2xl uppercase text-center lg:tracking-[.5em] font-primary mt-3 animate-fadeIn animation-delay-1000">
                    WITH BALLER POOLS & LANDSCAPE
                </h2>
                <ElementButton text="build & price a pool" url="components"
                    class="animate-bounce justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full mt-12">
                </ElementButton>
            </div>
        </div>

        <MediaBackgroundimage url="/masthead/background.jpg" alt="background tree"
            class="z-0 lg:rounded-b-[40%] rounded-b-[25%]">
        </MediaBackgroundimage>

        <!-- <MediaBackgroundvideo class="z-10 lg:rounded-b-[40%] rounded-b-[25%]">
            <source src="/masthead/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>

        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background tree"
            class="z-30 lg:rounded-b-[40%] rounded-b-[25%]">
        </MediaBackgroundimage> -->
    </div>
</template>

<script setup lang="ts">



</script>

<style>

</style>
