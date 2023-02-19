<template>
    <section :style="style">
        <BiscayneMasthead v-if="appConfig.appStyle === AppStyles.Biscayne"></BiscayneMasthead>

        <MarlinMasthead v-if="appConfig.appStyle === AppStyles.Marlin"></MarlinMasthead>

        <TortugaMasthead v-if="appConfig.appStyle === AppStyles.Tortuga"></TortugaMasthead>
    </section>
</template>


<script setup lang="ts">
import { AppStyles } from '~~/models/appstyles';
const appConfig = useAppConfig();

const style = ref("");

onMounted(() => {
    if (window.innerWidth <= 640) {
        style.value = `height:${window.innerHeight - 64}px`
    } else {
        style.value = `height:${window.innerHeight}px`
    }
})
</script>