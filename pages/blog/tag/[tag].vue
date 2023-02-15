<template>
    <div>
        <MarlinSubhead title="Blogs">
        </MarlinSubhead>
        <SharedBlog v-if="blogs" :blogs="blogs"></SharedBlog>
    </div>
</template>

<script setup lang="ts">
import { Blog } from '~~/models/blog';



useSeoMeta({
    title: "Blogs",
    ogTitle: "Blogs",
    description: "All Blogs",
    ogDescription: "All Blogs",
    ogImage: '/poolcorp-logo.png',
    ogSiteName: 'Pools & Spas'
});
const appConfig = useAppConfig();
const { data: returnedBlogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}`)
const route = useRoute();
let tag = route.params.tag as string;
const blogs = reactive(returnedBlogs);
if (blogs.value) {
    blogs.value = blogs.value.filter((v) => v.tags.includes(tag));
}
</script>
