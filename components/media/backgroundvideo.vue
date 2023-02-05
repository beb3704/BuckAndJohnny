<template>
    <video id="Video" loop muted class="hidden absolute lg:block h-full w-full object-cover">
        <slot></slot>
    </video>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    if (window.innerWidth >= 1024) {
        let element = <HTMLVideoElement>document.getElementById("Video");
        if (element) {
            element.play();
        }
    }

})
</script>
