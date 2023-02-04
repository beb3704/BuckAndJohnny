<template>
    <div>
        <div v-for="link in state.NavigationLinks">
            <div class="text-2xl">
                {{ link.Name }}
            </div>
            <div>
                {{ link.Route }}
            </div>
        </div>
        {{ windowWidth }}
        <video id="Video">
            <source src="video.mp4" type="video/mp4">
        </video>
        <img src="picture.jpg" />
    </div>
</template>

<script setup>
const videoElement = ref()

onMounted(() => {
    if (window.innerWidth >= 1024) {
        document.getElementById("Video").play();
    }

})

const state = useStaticAppState();

useSeoMeta({
    title: "A Better title",
    ogTitle: "A Good Title",
    description: "A dank page",
    ogDescription: "A dank Page",
    ogImage: ''
});
</script>
