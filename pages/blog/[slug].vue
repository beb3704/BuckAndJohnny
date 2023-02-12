<template>
    <div class="bg-[#EDEDED]">
        <MarlinSubhead title="Blogs">
        </MarlinSubhead>
        <div class="lg:p-10 max-w-5xl m-auto">
            <NuxtImg v-if="blog" :src="blog.imageUrl" width="700" height="400" format="webp"
                sizes="sm:100vw md:100vw lg:50vw" quality="70" class="object-cover m-auto w-full h-60 md:h-72 lg:h-96"
                alt="blog image">
            </NuxtImg>
            <h1 class=" p-6 text-2xl bg-[#fff] text-titles">{{ blog?.title }}</h1>
            <div v-if="blog" v-html="blog.body" class="bg-[#fff] text-bodyCopy p-6">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">import appConfig from '~~/app.config';
import { Blog } from '~~/models/blog';

const route = useRoute();
const { data: blog } = await useFetch<Blog>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}/blog/${route.params.slug}`)

useSeoMeta({
    title: blog.value?.title,
    ogTitle: blog.value?.title,
    description: blog.value?.excerpt,
    ogDescription: blog.value?.excerpt,
    ogImage: blog.value?.imageUrl
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