<template>
    <NuxtLink :to="url" class="flex justify-center">

        <button v-if="appConfig.buttonStyle === ButtonStyles.Biscayne"
            :class="`uppercase flex justify-center items-center ${buttonColor ? buttonColor : 'text-buttonColor'} ${buttonBGColor ? buttonBGColor : 'bg-buttonBackground'} lg:text-xl font-bold font-primary py-4 px-6 text-base md:py-5 md:px-12 md:text-l`">
            {{ props.text }}
        </button>

        <button v-if="appConfig.buttonStyle === ButtonStyles.Marlin"
            :class="`uppercase flex justify-center items-center ${buttonColor ? buttonColor : 'text-buttonColor'} ${buttonBGColor ? buttonBGColor : 'bg-buttonBackground'} lg:text-xl font-bold font-primary py-2 px-16 text-base md:px-24 lg:px-32 md:text-l rounded-full`">
            {{ props.text }}
        </button>

        <button v-if="appConfig.buttonStyle === ButtonStyles.Tortuga"
            :class="`uppercase flex justify-center items-center ${buttonColor ? buttonColor : 'text-buttonColor'} ${buttonBGColor ? buttonBGColor : 'bg-buttonBackground'} font-bold font-primary py-2 px-10 text-xl  md:text-l lg:text-3xl lg:py-3 lg:px-14`">
            {{ props.text }}
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">
import { ButtonStyles } from '~~/models/buttonstyles';

const props = defineProps({
    text: { type: String, required: true },
    url: { type: String, required: true },
    buttonColor: String,
    buttonBGColor: String,
})

const appConfig = useAppConfig();

</script>