<template>
    <section :style="classes">
        <BiscayneMasthead v-if="appConfig.appStyle === AppStyles.Biscayne"></BiscayneMasthead>

        <MarlinMasthead v-if="appConfig.appStyle === AppStyles.Marlin"></MarlinMasthead>

        <TortugaMasthead v-if="appConfig.appStyle === AppStyles.Tortuga"></TortugaMasthead>
    </section>
</template>


<script setup lang="ts">
import { AppStyles } from '~~/models/appstyles';

const appConfig = useAppConfig();

const innerHeight = ref(0);
const innerWidth = ref(0)

onMounted(() => {
    innerHeight.value = window.innerHeight;
    innerWidth.value = window.innerWidth;
})

const classes = computed(() => {
    if (innerWidth.value <= 640) {
        return `height:${innerHeight.value - 64}px`
    } else {
        return `height:${innerHeight.value}px`
    }

})

</script>