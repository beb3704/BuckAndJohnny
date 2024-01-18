<template>
  <div>
    <Bnjnav></Bnjnav>
    <SubHeader
      title="special events"
      sub-title="lovely options for your next gathering"
    >
      <div
        class="text-textLight grid grid-cols-2 p-2 gap-10 m-auto"
        style="width: 375px"
      ></div>
    </SubHeader>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 m-auto max-w-6xl">
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start text-center"
      >
        <div class="p-2 uppercase font-bold">
          <NuxtImg
            format="webp"
            quality="70"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            src="glassroom.jpg"
            class="h-auto w-full"
            alt="The Glass Room Interio0r"
          ></NuxtImg>
          <br />
          <h2>The Glass Room</h2>
          <span class="text-darkRed"
            >An Elegantly Appointed Space | accommodates 400</span
          >
        </div>
        <div class="p-2 col-span-full">
          Imagine… exposed brick walls, a high ceiling and wall of windows from
          the ceiling to floor to encompass your special event. All that’s
          missing is your personal touch. Weddings, baby showers, birthday and
          anniversary parties, office parties, meetings, and banquets are
          celebrated weekly. Equipped with flat-screen televisions and two full
          bars. Our amazing staff will customize your event per request and
          provide top-shelf service throughout.
        </div>
      </div>
      <a href="2023-glassroom-2.pdf" download>
        <NuxtImg
          format="webp"
          quality="70"
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          src="download.png"
          class="h-auto w-80 m-auto"
          alt="The Upstairs Room Interio0r"
        ></NuxtImg>
      </a>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start text-center md:col-start-2 md:row-start-1"
      >
        <div class="p-2 uppercase font-bold">
          <NuxtImg
            format="webp"
            quality="70"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            src="upstairs.jpg"
            class="h-auto w-full"
            alt="The Upstairs Room Interio0r"
          ></NuxtImg>
          <br />
          <h2>Upstairs</h2>

          <span class="text-darkRed"
            >A more casual event space | accommodates 50</span
          >
        </div>
        <div class="p-2 col-span-full">
          Upstairs at Buck and Johnny's has been host to a long list of event
          types, most notably graduation parties and large family gatherings.
          Enjoy an elevated view of our beautiful, historic building, as well as
          private space for you and your guests to stretch out in. Your party
          can enjoy the relaxed and fun-filled atmosphere of Buck and Johnny's
          plus live entertainment - all while having a semi-private space
          alongside a dedicated server team.
        </div>
      </div>
      <!-- <a href="yourfile2.pdf" download>
        <NuxtImg format="webp" quality="70" sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw" src="download.png"
          class="h-auto w-80 m-auto" alt="The Upstairs Room Interio0r"></NuxtImg>
      </a>
 -->
    </div>

    <br />
    <br />
    <div class="text-center bg-lightRed mt-10 p-4 py-8">
      <h6
        class="text-[#fff] text-3xl md:text-5xl uppercase font-bold tracking-wide"
      >
        request a booking
      </h6>
    </div>
    <contact></contact>
    <br />
    <br />
    <br />
    <br />
    <br />
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

h2 {
  font-size: 2rem;
  text-align: center;
}

span {
  text-align: center;
}
</style>