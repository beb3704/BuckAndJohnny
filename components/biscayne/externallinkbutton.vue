<template>
    <a :href="url" class="flex justify-center">
        <button
            :class="`uppercase flex justify-center items-center text-buttonColor bg-buttonBackground  lg:text-xl font-bold font-primary ${small ? 'py-4 px-6 text-base' : 'py-5 px-12 text-l'}`">
            {{ props.text }}
        </button>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true },
    url: { type: String, required: true },
    small: Boolean
})
</script>