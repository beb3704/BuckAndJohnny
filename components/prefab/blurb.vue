<template>
    <div class="">
        <h2 class="text-titles text-xl md:text-2xl">
            {{ props.subTitle }}
        </h2>
        <h3 class="mb-4 text-l text-subTitles" v-if="props.subTitle">
            {{ props.subTitle }}
        </h3>
        <p class="text-justify m-auto text-lg  text-bodyCopy">
            <slot></slot>
        </p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: { type: String, required: true },
    subTitle: String
})

</script>