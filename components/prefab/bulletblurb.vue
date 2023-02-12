<template>
    <div class="">
        <h2 class="text-titles text-2xl">
            {{ props.subTitle }}
        </h2>
        <h3 class="mb-4 text-l text-subTitles" v-if="props.subTitle">
            {{ props.subTitle }}
        </h3>
        <ul class="m-auto text-lg text-bodyCopy grid gap-4">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: { type: String, required: true },
    subTitle: String
})

</script>

<style scoped>
ul:deep(li) {
    @apply text-bodyCopy border-l-[6px] border-accent pl-4 py-2 shadow bg-bulletBackground text-center
}
</style>