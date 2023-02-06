<template>
    <div class="grid max-w-7xl">
        <div v-for="blog in blogs">
            <NuxtImg :src="blog.imageUrl" sizes="sm:400px" quality="70" class="object-cover" loading="lazy"></NuxtImg>
        </div>
    </div>
</template>
s
<script setup lang="ts">import { Blog } from '~~/models/blog';

const appConfig = useAppConfig()

const { data: blogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}`)
</script>