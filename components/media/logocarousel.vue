<template>
    <Swiper :autoplay="{ delay: 3000 }" :modules="[SwiperAutoplay]" :slides-per-view="data.width" class="">

        <SwiperSlide v-for="href in slides">
            <div class="w-full h-full grid justify-center">
                <NuxtImg format="webp" quality="70" sizes="sm:150px md:250px lg:350px" :src="href"
                    alt="Various manufacturer logos"></NuxtImg>
            </div>
        </SwiperSlide>

    </Swiper>
</template>



<script  setup lang="ts">

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

let slides = [
    'https://splashdownstorage.blob.core.windows.net/logos/alaglas.png',
    'https://splashdownstorage.blob.core.windows.net/logos/aquachek.png',
    'https://splashdownstorage.blob.core.windows.net/logos/barrierreef.png',
    'https://splashdownstorage.blob.core.windows.net/logos/bluehawaiian.png',
    'https://splashdownstorage.blob.core.windows.net/logos/cardinal.png',
    'https://splashdownstorage.blob.core.windows.net/logos/century.png',
    'https://splashdownstorage.blob.core.windows.net/logos/claquavations.png',
    'https://splashdownstorage.blob.core.windows.net/logos/dolphin.png',
    'https://splashdownstorage.blob.core.windows.net/logos/fluidra.png',
    'https://splashdownstorage.blob.core.windows.net/logos/haviland.png',
    'https://splashdownstorage.blob.core.windows.net/logos/hayward.png',
    'https://splashdownstorage.blob.core.windows.net/logos/imagine.png',
    'https://splashdownstorage.blob.core.windows.net/logos/intermatic.png',
    'https://splashdownstorage.blob.core.windows.net/logos/jandy.png',
    'https://splashdownstorage.blob.core.windows.net/logos/latham.png',
    'https://splashdownstorage.blob.core.windows.net/logos/leisure.png',
    'https://splashdownstorage.blob.core.windows.net/logos/maytronics.png',
    'https://splashdownstorage.blob.core.windows.net/logos/naturalchemistry.png',
    'https://splashdownstorage.blob.core.windows.net/logos/pentair.png',
    'https://splashdownstorage.blob.core.windows.net/logos/polaris.png',
    'https://splashdownstorage.blob.core.windows.net/logos/proteam.png',
    'https://splashdownstorage.blob.core.windows.net/logos/regal.png',
    'https://splashdownstorage.blob.core.windows.net/logos/rheem.png',
    'https://splashdownstorage.blob.core.windows.net/logos/sanjuan.png',
    'https://splashdownstorage.blob.core.windows.net/logos/sigura.png',
    'https://splashdownstorage.blob.core.windows.net/logos/srsmith.png',
    'https://splashdownstorage.blob.core.windows.net/logos/sun.png',
    'https://splashdownstorage.blob.core.windows.net/logos/tallman.png',
    'https://splashdownstorage.blob.core.windows.net/logos/tara.png'
]
</script>