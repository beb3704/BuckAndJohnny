<template>
  <div>
    <Bnjnav></Bnjnav>
    <SubHeader title="Blogs" sub-title="All the latest news"></SubHeader>

    <SharedBlog v-if="blogs" :blogs="blogs"></SharedBlog>
  </div>
</template>

<script setup lang="ts">
import { Blog } from "~~/models/blog";

useSeoMeta({
  title: "Blogs",
  ogTitle: "Blogs",
  description: "All Blogs",
  ogDescription: "All Blogs",
  ogImage: "https://www.buckandjohnnys.com/bucknj.webp",
  ogSiteName: "Buck & Johnnys Restaurant",
});
const appConfig = useAppConfig();
const { data: returnedBlogs } = await useFetch<Array<Blog>>(
  `https://rrapibeta.azurewebsites.net/api/public/posts/Getposts/${appConfig.licenseKey}`
);
const route = useRoute();
let tag = route.params.tag as string;
const blogs = reactive(returnedBlogs);
if (blogs.value) {
  blogs.value = blogs.value.filter((v) =>
    v.tags.map((z) => z.name).includes(tag)
  );
}
</script>
