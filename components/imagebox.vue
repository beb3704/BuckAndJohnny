<template>
    <div class="h-72 hoverBg overflow-hidden flex flex-col justify-between md:border-8">
        <MediaBackgroundimage v-if="url && alt" class="BackgroundSettings transition-all duration-1000" :alt="alt"
            :url="url">
        </MediaBackgroundimage>

        <div
            class="h-24 w-full bg-opacity-70 bg-[#000] z-10 grid justify-center items-center content-center py-2 font-bold">
            <h5 class="uppercase text-3xl tracking-widest text-textLight text-center">
                {{ title }}
            </h5>
            <h6 v-if="subTitle" class="uppercase text-xs text-textLight text-center mt-1">{{ subTitle }}</h6>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    url: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    style: Object,
    darkOverlay: Boolean,
})
</script>