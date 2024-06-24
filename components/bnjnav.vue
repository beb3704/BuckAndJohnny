<template>
  <div>
    <div class="h-12 bg-lightRed flex justify-between p-2 lg:h-6 lg:px-10">
      <div class="flex justify-start items-center">
        <a
          :href="`tel:${appConfig.contact.phone}`"
          class="grid justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 md:h-3 md:w-3"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          :href="`tel:${appConfig.contact.phone}`"
          class="uppercase block ml-1 md:text-xs"
          >{{ appConfig.contact.phone.replaceAll("-", ".") }}
        </a>
      </div>

      <div class="flex lg:hidden">
        <div class="bg-[#fff] mr-9 px-3">
          <div class="clip-right bg-[#fff]"></div>
          <NuxtLink
            to="/menu"
            class="p-1 uppercase text-darkRed font-bold block text-center"
          >
            Menu
          </NuxtLink>
        </div>
      </div>

      <div class="hidden lg:flex justify-start items-center text-sm">
        {{ appConfig.contact.address.street }} |
        {{ appConfig.contact.address.city }},
        {{ appConfig.contact.address.state }}
      </div>
    </div>
    <div class="hidden lg:flex bg-[#000] p-2 justify-between">
      <div class="flex">
        <div class="bg-lightRed mr-9 px-3 flex justify-center items-center">
          <div class="clip-right bg-lightRed"></div>
          <NuxtLink
            to="/menu"
            class="p-1 uppercase text-[#fff] font-bold block text-center text-sm tracking-widest"
          >
            Menu
          </NuxtLink>
        </div>
      </div>

      <nav class="flex justify-center items-center mr-6">
        <NuxtLink
          v-for="link in appConfig.navigationLinks"
          :to="link.url"
          class="uppercase text-[#fff] mx-2 font-primary text-center tracking-widest mr-4"
        >
          {{ link.name }}</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>