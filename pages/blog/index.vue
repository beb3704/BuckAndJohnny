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
    ogImage: '/logo.png'
});

const appConfig = useAppConfig()

const { data: blogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}`)
</script>

<style scoped>
.clip {
    clip-path: polygon(100% 0, 100% 100%, 0 70%, 0 0);

}

.clipMore {
    clip-path: polygon(100% 0, 100% 100%, 0 0%, 0 0);

}
</style>