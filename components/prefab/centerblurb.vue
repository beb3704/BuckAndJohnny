<template>
    <div>
        <MediaBackgroundimage alt="blue background" url="/bluebackground.png"></MediaBackgroundimage>
        <ElementH3 class="text-center">
            {{ props.title }}
        </ElementH3>
        <ElementH4 v-if="props.subTitle" class="text-center mt-2">
            {{ props.subTitle }}
        </ElementH4>
        <ElementP class="mt-4">
            <slot></slot>
        </ElementP>
        <BiscayneExternallinkbutton v-if="buttonText && buttonUrl" text="Get Started Now" :url="buttonUrl"
            class="m-auto mt-10">
        </BiscayneExternallinkbutton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true },
    subTitle: String,
    buttonText: String,
    buttonUrl: String,
})
</script>