<template>
    <div class="lg:p-10 max-w-7xl m-auto">
        <NuxtImg v-if="blog" :src="blog.imageUrl" format="webp" sizes="sm:100vw md:100vw lg:50vw" quality="70"
            class="object-cover m-auto w-full" alt="blog image"></NuxtImg>
        <h1 class="bg-backgroundLight p-4 text-2xl">{{ blog?.title }}</h1>
        <div v-if="blog" v-html="blog.body" class="bg-backgroundLight p-4">

        </div>
    </div>
</template>

<script setup lang="ts">import appConfig from '~~/app.config';
import { Blog } from '~~/models/blog';

const route = useRoute();
const { data: blog } = await useFetch<Blog>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}/blog/${route.params.slug}`)


// this.$config.baseUrl +
//         "blogs/" +
//         this.$config.licenseKey +
//         "/blog/" +
//         this.$route.params.slug.toUpperCase(),


</script>

<style>
h3,
h1,
h2,
h4 {
    @apply font-secondary text-textLight font-bold
}

* {
    @apply font-secondary text-textLight
}
</style>