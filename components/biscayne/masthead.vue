<template>
    <div class="h-screen max-h-[90vh] relative">
        <!-- <div v-for="link in state.NavigationLinks" class="h-screen max-h-[90vh]">
            <div class="text-2xl">
                {{ link.Name }}
            </div>
            <div>
                {{ link.Route }}
            </div>
        </div> -->
        <MediaBackgroundvideo class="z-10">
            <source src="/video.mp4" type="video/mp4">
        </MediaBackgroundvideo>
        <MediaBackgroundimage url="/picture.jpg" alt="background tree" class="z-0">

        </MediaBackgroundimage>
    </div>
</template>

<script setup lang="ts">


</script>
