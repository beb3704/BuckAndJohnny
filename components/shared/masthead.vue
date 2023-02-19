<template>
    <section :class="`h-[calc(var(--vh)-64px)] md:h-screen`">
        <BiscayneMasthead v-if="appConfig.appStyle === AppStyles.Biscayne"></BiscayneMasthead>

        <MarlinMasthead v-if="appConfig.appStyle === AppStyles.Marlin"></MarlinMasthead>

        <TortugaMasthead v-if="appConfig.appStyle === AppStyles.Tortuga"></TortugaMasthead>
    </section>
</template>


<script setup lang="ts">
import { AppStyles } from '~~/models/appstyles';
const appConfig = useAppConfig();
const innerHeight = ref(0);


onMounted(() => {
    innerHeight.value = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${innerHeight.value}px`);
})

</script>