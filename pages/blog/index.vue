<template>
    <div class="grid max-w-7xl gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3 p-5 m-auto">
        <NuxtLink v-for="blog in blogs" class="shadow bg-backgroundLight rounded" :to="`blog/${blog.seoSlug}`">
            <NuxtImg :src="blog.imageUrl" format="webp" width="400px" height="250px" sizes="sm:400px" quality="70"
                class="object-cover w-full rounded-t" loading="lazy" alt="blog image"></NuxtImg>
            <div class="p-4 font-secondary font-bold text-textLight">
                {{ blog.title }}
            </div>
            <div class="px-4 pb-8 font-secondary text-justify text-textLight text-sm">
                {{ blog.excerpt }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">import { Blog } from '~~/models/blog';

useSeoMeta({
    title: "A Better title",
    ogTitle: "A Good Title",
    description: "A dank page",
    ogDescription: "A dank Page",
    ogImage: '/logo.png'
});

const appConfig = useAppConfig()

const { data: blogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}`)
</script>