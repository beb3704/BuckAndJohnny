<template>
    <footer class="bg-backgroundLight grid grid-cols-2 gap-5 lg:grid-cols-[1fr_1fr_2fr_2fr]">
        <SharedModal v-model:show="showModal">
            <SharedPrivacypolicy></SharedPrivacypolicy>
        </SharedModal>
        <nav class="grid p-3">
            <div class="text-accent uppercase mb-1 ">Navigation</div>
            <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
                class="text-base uppercase text-textLight mb-1 ml-3 ">
                {{ link.name }}</NuxtLink>
        </nav>

        <div class="p-3">
            <div class="text-accent uppercase mb-1 ">Call us!</div>
            <a :href="`tel:${appConfig.contact.phone}`" class="uppercase block mb-2  text-textLight">{{
                appConfig.contact.phone.replaceAll('-', '.')
            }}
            </a>
            <div class="text-accent uppercase mb-1 ">Address</div>
            <a class="uppercase mb-2   block text-textLight"
                :href="`http://maps.google.com/?q=${appConfig.contact.address.street},${appConfig.contact.address.city},${appConfig.contact.address.state},${appConfig.contact.address.zip}`">
                <div class=" text-textLight">
                    {{ appConfig.contact.address.street }}
                </div>
                <div class=" text-textLight">
                    {{ appConfig.contact.address.city }},{{ appConfig.contact.address.state }}
                </div>
            </a>
            <div class="text-accent uppercase mb-1 ">Policies</div>
            <a href="#" v-on:click="showModal = !showModal" class=" text-textLight" to="/privacypolicy">Privacy
                Policy</a>
        </div>

        <div class="col-span-full lg:col-span-1 p-3">
            <div class="text-accent uppercase mb-1 ">Latest posts</div>
            <ul class=" text-textLight">
                <li v-for="blog in latestBlogs"
                    class="mb-2 p-1 bg-backgroundDark border-l-4 border-accent uppercase text-sm">
                    <NuxtLink :to="`/blog/${blog.seoSlug}`" class="block pl-3 py-1">{{ blog.title }}</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="col-span-full lg:col-span-1 p-3">
            <div class=" text-accent uppercase mb-1 ">Latest tags</div>
            <ul class=" text-textLight">
                <li v-for="tag in topTags"
                    class="mb-2 p-1 bg-backgroundDark border-l-4 border-accent text-sm uppercase">
                    <NuxtLink :to="`/blog/tag/${tag}`" class="block pl-3 py-1">{{ tag }}</NuxtLink>
                </li>
            </ul>
        </div>
        <a href="https://www.deepdiveco.com" class="flex justify-between w-full col-span-full">
            <NuxtImg src="/footer/splashdownfooter.svg" alt="company icon" class="h-10 md:h-14"></NuxtImg>
            <NuxtImg src="/footer/deepdivefooter.svg" alt="company icon" class="h-10 md:h-14 justify-self-end">
            </NuxtImg>
        </a>
    </footer>
</template>

<script setup lang="ts">
import { Blog } from '~~/models/blog';

const showModal = ref(false);
const appConfig = useAppConfig()
const { data: latestBlogs } = await useFetch<Array<Blog>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}/latestblogs`)
const { data: topTags } = await useFetch<Array<string>>(`https://splashdownadminportal.azurewebsites.net/blogs/${appConfig.licenseKey}/toptags`)
</script>