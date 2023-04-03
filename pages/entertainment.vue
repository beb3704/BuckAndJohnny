<template>
  <div>
    <MediaBackgroundimage alt="Delicious Pizza" url="/pizzabg.jpg" :dark-overlay="true"></MediaBackgroundimage>
    <Bnjnav></Bnjnav>
    <div class="h-20"></div>
    <div class="max-w-6xl m-auto">
      <ClientOnly>
        <Alert></Alert>
      </ClientOnly>

      <div class="md:grid-cols-2 grid md:px-2 lg:px-10 gap-6 pb-20">
        <Imagebox url="/zydecobreakfeast.jpg" title="Zydeo Breakfast" alt="People Dancing"
          sub-title="2-step with us every saturday at 8:00 am">
          <div class="text-textLight grid grid-cols-2 p-2 gap-10">
            <div class="bg-lightRed py-1">
              <div class="clip-right bg-lightRed"></div>
              <NuxtLink
                to="https://www.google.com/maps/dir/30.1334528,-92.0387584/buck+and+johnnys/@30.2056649,-92.0394119,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8624868557ce87c3:0xcf24eb268818e33!2m2!1d-91.9000351!2d30.2729471"
                class="flex items-center font-bold text-sm justify-center h-full w-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>GET DIRECTIONS</div>
              </NuxtLink>
            </div>

            <div class="bg-darkRed py-2">
              <div class="clip-left bg-darkRed"></div>
              <NuxtLink to="/zydeco-breakfast"
                class="flex items-center font-bold text-sm justify-center h-full w-full text-center -ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div class="uppercase">view schedule</div>
              </NuxtLink>
            </div>
          </div>
        </Imagebox>

        <Imagebox url="/accordian.jpg" title="live music weekly" alt="People Dancing"
          sub-title="local talent and incredible food">
          <div class="text-textLight grid grid-cols-2 p-2 gap-10">
            <div class="bg-lightRed py-1">
              <div class="clip-right bg-lightRed"></div>
              <NuxtLink
                to="https://www.google.com/maps/dir/30.1334528,-92.0387584/buck+and+johnnys/@30.2056649,-92.0394119,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8624868557ce87c3:0xcf24eb268818e33!2m2!1d-91.9000351!2d30.2729471"
                class="flex items-center font-bold text-sm justify-center h-full w-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>GET DIRECTIONS</div>
              </NuxtLink>
            </div>

            <div class="bg-darkRed py-2">
              <div class="clip-left bg-darkRed"></div>
              <NuxtLink to="/live-music"
                class="flex items-center font-bold text-sm justify-center h-full w-full text-center -ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div class="uppercase">view schedule</div>
              </NuxtLink>
            </div>
          </div>
        </Imagebox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cls-1 {
  fill: #fff;
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 1.25px;
}

.cls-1 {
  fill: #fff;
}
</style>