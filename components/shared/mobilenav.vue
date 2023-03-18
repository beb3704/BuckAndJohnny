<template>
  <div class="z-[1000]">
    <nav
      :class="`fixed top-14 right-2 w-12 h-10 md:hidden grid ${!isOpen ? 'bg-gradient-to-r from-textLight to-textLight' : ''} z-[1002]`">
      <div class="grid justify-center items-center w-full h-full" v-on:click="() => isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          :class="`w-6 h-6 ${!isOpen ? 'text-[#000]' : 'text-[#fff]'}`">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>

    <div
      :class="`${isOpen ? 'h-full w-full' : 'h-0 w-0'} fixed top-0 right-0 bg-gradient-to-r from-lightRed to-darkRed overflow-hidden transition-all ease-in-out pb-16`">
      <MediaBackgroundimage url="/pizzabg.jpg" alt="pizza" class="h-full">
      </MediaBackgroundimage>
      <div class="w-full h-full absolute bg-opacity-70 bg-[#000]"></div>

      <div class="grid gap-10 h-full">

        <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
          class="justify-self-center self-center col-span-full w-52 md:w-60 lg:w-80 h-auto">
        </NuxtImg>

        <div class="">
          <nav class="grid gap-4">
            <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url" v-on:click.native="isOpen = false"
              class="text-3xl uppercase font-bold text-[#fff] mb-2 mx-2 font-primary text-center">
              {{ link.name }}</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

const isOpen = ref(false);

</script>
