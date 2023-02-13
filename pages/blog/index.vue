<template>
    <section>
        <MarlinSubhead title="Blogs">
        </MarlinSubhead>
        <SharedBlog v-if="blogs" :blogs="blogs"></SharedBlog>
    </section>
</template>

<script setup lang="ts">
import { Blog } from '~~/models/blog';

useSeoMeta({
    title: "Blogs",
    ogTitle: "Blogs",
    description: "All Blogs",
    ogDescription: "All Blogs",
    ogImage: '/logo.png',
    ogSiteName: 'Pools & Spas'
});

const appConfig = useAppConfig()

const { data: blogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}`)
</script>