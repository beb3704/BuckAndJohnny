<template>
    <div class="grid grid-cols-2 gap-y-8">
        <MediaBackgroundimage url="/subhead/background.jpg" alt="background image" class="z-0">
        </MediaBackgroundimage>
        <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background" class="z-10">
        </MediaBackgroundimage>

        <BiscayneNavigation :sub-header="true" class="md:row-start-1 md:col-start-1 m-4 z-50"></BiscayneNavigation>

        <ElementButton text="build & price a pool" url="https://google.com"
            class="row-start-1 col-span-full justify-self-end self-start md:row-start-2 animate-smallBounceUp lg:mt-6">
        </ElementButton>

        <NuxtLink to="/"
            class="row-start-2 col-span-full justify-self-center items-center mt-10 md:row-start-1 md:col-start-2 z-50 md:justify-self-end md:mr-10">
            <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px md:350px" src="/logo.png" alt="logo"
                class="w-44 md:w-44 h-auto">
            </NuxtImg>
        </NuxtLink>

        <h1
            class="block py-3 w-3/4 text-center row-start-3 col-span-full justify-self-center self-center text-3xl bg-backgroundDark md:w-fit md:col-span-1 md:justify-self-start md:bg-[#ffffff00] uppercase font-bold text-mastheadTitle md:text-subHeaderTitle font-primary md:row-start-2 md:col-start-1  md:ml-6 md:text-4xl z-50">
            {{ title }}
        </h1>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
})
</script>

