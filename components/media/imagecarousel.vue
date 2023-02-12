<template>
    <Swiper :autoplay="{ delay: 3000 }" :modules="[SwiperAutoplay]" :slides-per-view="data.width" class="">

        <SwiperSlide v-for="href in slides">
            <div class="w-full h-full grid justify-center">
                <NuxtImg format="webp" quality="70" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" :src="href"
                    class="object-cover h-full w-full" alt="Various manufacturer logos"></NuxtImg>
            </div>
        </SwiperSlide>

    </Swiper>
</template>

<script  setup lang="ts">
import { PropType } from 'vue';

let data = reactive({
    width: 2
})

onMounted(() => {
    if (window.innerWidth >= 1024) {
        data.width = 5;
    } else if (window.innerWidth >= 768) {
        data.width = 3;
    }
})

const props = defineProps({
    slides: { type: Array as PropType<Array<string>>, required: true },
})

</script>
