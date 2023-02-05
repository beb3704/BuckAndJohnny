<template>
    <video id="Video" loop muted class="hidden absolute lg:block h-full w-full object-cover top-0 left-0 object-center">
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
