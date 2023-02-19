<template>
    <section>
        <BiscayneSubhead v-if="appConfig.appStyle === AppStyles.Biscayne" :title="title"></BiscayneSubhead>

        <MarlinSubhead v-if="appConfig.appStyle === AppStyles.Marlin" :title="title"></MarlinSubhead>

        <TortugaSubhead v-if="appConfig.appStyle === AppStyles.Tortuga" :title="title"></TortugaSubhead>
    </section>
</template>


<script setup lang="ts">
import { AppStyles } from '~~/models/appstyles';

const appConfig = useAppConfig();

const props = defineProps({
    title: { type: String, required: true },
})

</script>