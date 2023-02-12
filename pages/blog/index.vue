<template>
    <div class="bg-[#fff]">
        <MarlinSubhead title="Blogs">
        </MarlinSubhead>
        <div class="grid max-w-7xl md:gap-10 justify-center lg:grid-cols-2 md:p-5 m-auto">

            <article v-for="blog in blogs"
                class="from-backgroundLight bg-gradient-to-t to-[#fff] relative flex flex-col shadow-md rounded-lg overflow-hidden">
                <NuxtImg :src="blog.imageUrl" format="webp" width="400px" height="250px" sizes="sm:400px" quality="70"
                    class="object-cover object-bottom w-full h-72 rounded-t-lg  relative z-0 clip" loading="lazy"
                    alt="blog image">
                </NuxtImg>
                <div class="lg:p-4 relative z-10 bg-[#fff] -mt-32 m-4 shadow-sm h-full grid  rounded">
                    <NuxtLink :to="`/blog/${blog.seoSlug}`" class="self-end  flex justify-self-end">

                        <div class="relative">
                            <div>
                                <div class="p-4  font-bold text-titles">
                                    {{ blog.title }}
                                </div>
                                <div class="px-4 pb-8  text-justify text-bodyCopy text-sm">
                                    {{ blog.excerpt }}
                                </div>
                            </div>
                        </div>

                    </NuxtLink>
                </div>
            </article>

        </div>
    </div>
</template>

<script setup lang="ts">import { Blog } from '~~/models/blog';

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