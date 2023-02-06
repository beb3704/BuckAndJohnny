<template>
    <div>
        {{ route.params.slug }}
        {{ blog }}
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