<template>
    <div class="h-[90vh] lg:h-screen relative">
        <div class="z-40 relative grid grid-cols-2 w-full h-full grid-rows-3">
            <BiscayneNavigation class="p-4 justify-self-start self-start"></BiscayneNavigation>
            <BiscayneExternallinkbutton text="build & price a pool" url="https://google.com"
                class="animate-bounce mt-5 mr-1 justify-self-start lg:justify-self-end self-start lg:col-span-1 col-span-full">
            </BiscayneExternallinkbutton>

            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
                class="justify-self-center self-center col-span-full">
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


        <MediaBackgroundvideo class="z-10">
            <source src="/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>
        <MediaBackgroundimage url="/background.jpg" alt="background tree" class="z-0"></MediaBackgroundimage>
        <MediaBackgroundimage url="/backgroundoverlay.png" alt="background tree" class="z-30"></MediaBackgroundimage>
    </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()


</script>
