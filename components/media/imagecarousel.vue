<template>
    <swiper-container slides-per-view="auto" autoplay-delay="3000"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <swiper-slide v-for="href in slides" class="grid justify-center">
            <NuxtImg format="webp" quality="70" class="object-cover w-full h-full" :src="$img(href)">
            </NuxtImg>
        </swiper-slide>
    </swiper-container>
</template>

<script  setup lang="ts">
import { register } from 'swiper/element/bundle';
import { PropType } from 'vue';
register();

const props = defineProps({
    slides: { type: Array as PropType<Array<string>>, required: true },
})

</script>
