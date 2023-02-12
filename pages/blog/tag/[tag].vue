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
    ogImage: '/logo.png'
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

<style>
.clip {
    clip-path: polygon(100% 0, 100% 100%, 0 70%, 0 0);

}

.clipMore {
    clip-path: polygon(100% 0, 100% 100%, 0 0%, 0 0);

}
</style>