<template>
    <div :class="`grid grid-cols-[min-content,min-content]`">
        <div v-if="!right" :class="`w-5 clip-left ${classColor}`"></div>
        <div :class="classColor">
            <slot></slot>
        </div>
        <div v-if="right" :class="`w-5 clip-right ${classColor}`"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    classColor: { type: String, required: true },
    right: { type: Boolean, required: true },
})
</script>