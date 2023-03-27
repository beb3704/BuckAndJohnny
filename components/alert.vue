<template>
  <div class="bg-lightRed text-[#fff] uppercase p-2 px-4 text-center text-sm col-span-full mb-6 bigClip" v-if="warning">
    {{ warning }}
  </div>
</template>

<script setup>
const { data: warning } = await useFetch(`https://rrapibeta.azurewebsites.net/api/public/BuckAndJohnny/getwarning`)
</script>