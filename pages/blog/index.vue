<template>
  <section>
    <Bnjnav></Bnjnav>
    <SubHeader title="Blog" sub-title="All the latest news"> </SubHeader>
    <SharedBlog v-if="blogs" :blogs="blogs"></SharedBlog>
  </section>
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

const { data: blogs } = await useFetch<Array<Blog>>(
  `https://rrapibeta.azurewebsites.net/api/public/posts/Getposts/${appConfig.licenseKey}`
);
</script>
