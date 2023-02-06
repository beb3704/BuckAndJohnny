<template>
    <video v-if="data.showVideo" id="Video" loop muted autoplay
        class="hidden absolute lg:block h-full w-full object-cover top-0 left-0 object-center">
        <slot></slot>
    </video>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

let data = reactive({
    showVideo: false
})

onMounted(() => {
    if (window.innerWidth >= 1024) {
        data.showVideo = true;
    } else {
        data.showVideo = false;
    }
})

</script>
