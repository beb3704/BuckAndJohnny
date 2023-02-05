<template>
    <div class="h-screen relative">
        <!-- <div v-for="link in state.NavigationLinks" class="h-screen max-h-[90vh]">
            <div class="text-2xl">
                {{ link.Name }}
            </div>
            <div>
                {{ link.Route }}
            </div>
        </div> -->

        <div class="z-40 relative grid grid-cols-2 w-full h-full grid-rows-3">
            <BiscayneNavigation class="p-4 justify-self-start self-start"></BiscayneNavigation>
            <BiscayneExternallinkbutton text="build & price a pool" url="https://google.com"
                class="animate-bounce mt-5 mr-1 justify-self-end self-start">
            </BiscayneExternallinkbutton>

            <NuxtImg format="webp" quality="60" height="200" src="/logo.png"
                class="justify-self-center self-center col-span-full">
            </NuxtImg>

            <div class="col-span-full justify-self-center self-end bg-primaryDark py-6 px-40">
                <h1 class="text-primaryText text-6xl font-bold uppercase text-center tracking-widest">Swimming pool pros
                </h1>
                <h2 class="text-primaryText text-2xl uppercase text-center tracking-[.5em]">serving the gulf coast</h2>
            </div>
        </div>


        <MediaBackgroundvideo class="z-10">
            <source src="/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>
        <MediaBackgroundimage url="/background.jpg" alt="background tree" class="z-0"></MediaBackgroundimage>
        <MediaBackgroundimage url="/backgroundoverlay.png" alt="background tree" class="z-30"></MediaBackgroundimage>
    </div>
</template>

<script setup lang="ts">


</script>
