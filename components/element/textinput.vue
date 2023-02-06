<template>
    <div class="m-2">
        <label class="block text-gray-700 text-md font-bold mb-2 pl-2" :for="placeHolder">
            {{ placeHolder }}
        </label>
        <input v-bind:value="value" v-on:input="$emit('input', $event.target)"
            class="shadow appearance-none text-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" :placeholder="placeHolder" />
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    value: { type: String, required: true },
    placeHolder: { type: String, required: true }
})
</script>