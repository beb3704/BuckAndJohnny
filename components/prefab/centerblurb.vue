<template>
    <div>
        <MediaBackgroundimage v-if="props.backgroundUrl && props.backgroundImageAlt" :alt="props.backgroundImageAlt"
            :url="props.backgroundUrl"></MediaBackgroundimage>
        <MediaAnimateinviewport>
            <h2 class="text-center class= text-2xl md:text-4xl lg:text-5xl uppercase text-titles">
                {{ props.title }}
            </h2>
            <h3 v-if="props.subTitle"
                class="text-center mt-2 text-sm md:text-lg lg:text-xl uppercase tracking-widest text-subTitles">
                {{ props.subTitle }}
            </h3>
            <p class="mt-4 px-6 md:px-16 max-w-5xl md:leading-8 lg:leading-10 text-justify m-auto text-lg  text-bodyCopy">
                <slot></slot>
            </p>
            <ElementButton v-if="buttonText && buttonUrl" text="Get Started Now" :url="buttonUrl" class="m-auto mt-10">
            </ElementButton>
        </MediaAnimateinviewport>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: { type: String, required: true },
    subTitle: String,
    buttonText: String,
    buttonUrl: String,
    backgroundUrl: String,
    backgroundImageAlt: String
})

</script>