<template>
    <Transition name="page">
        <section v-if="show"
            class="h-screen w-full fixed top-0 left-0 bg-backgroundLight z-50 p-2 md:p-8 lg:p-12 overflow-y-auto"
            v-on:click.self="$emit('update:show', false)">
            <div class="Modal">
                <slot></slot>
            </div>
            <div class="bg-[#ffffff] grid justify-center p-4">
                <button :class="`uppercase flex justify-center items-center 
                text-buttonColor bg-buttonBackground
                lg:text-xl font-bold font-primary py-4 px-6 text-base md:py-5 md:px-12 md:text-l`"
                    v-on:click.self="$emit('update:show', false)">
                    Close
                </button>
            </div>

        </section>
    </Transition>
</template>

<script setup lang="ts">

const props = defineProps({
    show: { type: Boolean, required: true },
})

</script>

<style scoped>
.Modal:deep(*) {
    @apply bg-[#ffffff] p-4
}
</style>