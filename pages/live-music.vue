<template>
  <div>
    <Bnjnav></Bnjnav>
    <SubHeader title="live music" sub-title="from local artists">
      <div
        class="text-textLight grid justify-center p-2 gap-10 m-auto"
        style="width: 375px"
      >
        <div class="bg-lightRed py-2 px-8 mt-3">
          <NuxtLink
            to="/"
            class="flex items-center font-bold text-sm justify-center h-full w-full text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" 
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div>GET DIRECTIONS</div>
          </NuxtLink>
        </div>
      </div>
    </SubHeader>

    <div class="bg-[#000] p-4">
      <h4 class="text-[#fff] uppercase text-center text-2xl font-bold">
        No Cover Charge for Nightly Music
      </h4>
      <h5 class="text-[#929497] uppercase text-center text-sm tracking-widest">
        first come, first served, no reservations
      </h5>
    </div>

    <div class="p-4 text-sm md:text-2xl uppercase text-center">
      <div class="py-1">Thursday music 6-9:00pm / 2 for 1 house wine</div>
      <div class="py-1">Friday & Saturday music 6:30-9:30pm</div>
      <div class="py-1">Monthly Drink, Pizza, and Salad Specials</div>
    </div>

    <div class="p-4 text-4xl text-darkRed uppercase text-center lg:text-5xl">
      Music Schedule
    </div>

    <ClientOnly>
      <LazyLivemusicevents></LazyLivemusicevents>
    </ClientOnly>
  </div>
</template>