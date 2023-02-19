<template>
  <div class="z-[1000]">
    <nav
      :class="`fixed bottom-0 left-0 w-full h-16 md:hidden grid grid-cols-4 pt-3 pb-2 ${!isOpen ? 'bg-gradient-to-r from-navBackgroundDark to-navBackgroundLight' : ''} z-[1002] border-t-2 border-t-navIconColor`">
      <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background tree" v-if="!isOpen">
      </MediaBackgroundimage>
      <NuxtLink to="/" v-on:click.native="isOpen = false">
        <div class="grid justify-center items-center w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 text-navIconColor  m-auto">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
      </NuxtLink>

      <NuxtLink to="/pools" v-on:click.native="isOpen = false">
        <div class="grid justify-center items-center w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 text-navIconColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
          </svg>

        </div>
      </NuxtLink>

      <NuxtLink to="/contact">
        <div class="grid justify-center items-center w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 text-navIconColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>

        </div>
      </NuxtLink>


      <div class="grid justify-center items-center w-full h-full" v-on:click="() => isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8 text-navIconColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>


      </div>

    </nav>

    <div
      :class="`${isOpen ? 'h-full w-full' : 'h-0 w-0'} fixed bottom-0 right-0 bg-gradient-to-r from-navBackgroundDark to-navBackgroundLight overflow-hidden transition-all ease-in-out pb-16`">
      <MediaBackgroundimage url="/masthead/backgroundoverlay.png" alt="background tree" class="h-full">
      </MediaBackgroundimage>

      <div class="grid gap-10 h-full">

        <NuxtImg format="webp" quality="100" sizes="sm:200px md:300px lg:350px" src="/logo.png" alt="logo"
          class="justify-self-center self-center col-span-full w-52 md:w-60 lg:w-80 h-auto">
        </NuxtImg>

        <div class="">
          <nav class="grid gap-4">
            <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url" v-on:click.native="isOpen = false"
              class="text-3xl uppercase font-bold text-navTextLinks mb-2 mx-2 font-primary text-center">
              {{ link.name }}</NuxtLink>
          </nav>
        </div>

        <div class="grid grid-cols-[1fr_80px] self-end h-16">
          <ElementButton text="build & price a pool" url="components" class="w-full bg-buttonBackground"
            v-on:click.native="isOpen = false">
          </ElementButton>


          <a :href="`tel:${appConfig.contact.phone}`" class="grid justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8 text-navIconColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

const isOpen = ref(false);

</script>
