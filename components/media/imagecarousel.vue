<template>
    <swiper-container slides-per-view="auto" autoplay-delay="3000"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <swiper-slide v-for="href in slides" class="grid justify-center">
            <NuxtImg format="webp" quality="70" class="object-cover w-full h-full" :src="href">
            </NuxtImg>
        </swiper-slide>
    </swiper-container>
</template>
<!-- 
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}, -->

<script  setup lang="ts">
import { register } from 'swiper/element/bundle';
import { PropType } from 'vue';
register();

const props = defineProps({
    slides: { type: Array as PropType<Array<string>>, required: true },
})

useSeoMeta({
    title: "A Better title",
    ogTitle: "A Good Title",
    description: "A dank page",
    ogDescription: "A dank Page",
    ogImage: '/logo.png'
});
</script>
