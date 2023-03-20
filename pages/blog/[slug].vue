<template>
    <div class="bg-[#EDEDED]">

        <Bnjnav></Bnjnav>
        <SubHeader :title="blog?.title" sub-title="">


        </SubHeader>

        <div class="lg:p-10 max-w-5xl m-auto p-4">
            <NuxtImg v-if="blog && blog.imgSrc" :src="blog.imgSrc" width="700" height="400" format="webp"
                sizes="sm:100vw md:100vw lg:50vw" quality="70" class="object-cover m-auto w-full h-60 md:h-72 lg:h-96"
                alt="blog image">
            </NuxtImg>
            <h1 class=" p-6 text-2xl bg-[#fff] text-titles">{{ blog?.title }}</h1>
            <div v-if="blog" v-html="blog.body" class="bg-[#fff] text-bodyCopy p-6">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import appConfig from '~~/app.config';
import { Blog } from '~~/models/blog';

const route = useRoute();
const { data: blog } = await useFetch<Blog>(`https://rrapibeta.azurewebsites.net/api/public/posts/Getposts/${appConfig.licenseKey}/${route.params.slug}`)

useSeoMeta({
    title: blog.value?.title,
    ogTitle: blog.value?.title,
    description: blog.value?.excerpt,
    ogDescription: blog.value?.excerpt,
    ogImage: blog.value?.slug,
    ogSiteName: 'Pools & Spas'
});
</script>

<style scoped>
h3,
h1,
h2,
h4 {
    @apply text-titles font-bold
}

* {
    @apply text-bodyCopy
}
</style>