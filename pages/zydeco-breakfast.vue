<template>
    <div>
        <Bnjnav></Bnjnav>
        <SubHeader title="world famous zydeco breakfast" sub-title="2-step with us every saturday at 8:00am">
            <div class="text-textLight grid justify-center p-2 gap-10 m-auto" style="width:375px">

                <div class="bg-lightRed py-2 px-8 mt-3">
                    <NuxtLink to="/" class="flex items-center font-bold text-sm justify-center h-full w-full text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div>GET DIRECTIONS</div>
                    </NuxtLink>
                </div>
            </div>

        </SubHeader>

        <div class="bg-[#000] p-4">
            <h4 class="text-[#fff] uppercase text-center text-2xl font-bold">$10 cover charge | $15 endless
                mimosas
            </h4>
            <h5 class="text-[#929497] uppercase text-center text-sm tracking-widest">first come, first served, no
                reservations</h5>
        </div>

        <div class="p-4 text-sm md:text-2xl uppercase text-center">
            <div class="py-1">every saturday doors open at 8:00am</div>
            <div class="py-1">Music from 8:30-11:30am</div>
            <div class="py-1">special breakfast menu served until 11:00am</div>
        </div>

        <div class="p-4 text-4xl text-darkRed uppercase text-center lg:text-5xl">
            Music Schedule
        </div>

        <div class="grid md:grid-cols-2 max-w-5xl m-auto gap-4 pb-10 pt-6 p-2">

            <div class="border-8 border-[#E5E6E7] grid grid-cols-[min-content,1fr]">
                <div class="bg-lightRed px-4 py-2 text-center text-[#fff] uppercase">
                    <div class="text-sm">December</div>
                    <div class="text-4xl">20</div>
                </div>
                <div class="text-center flex justify-center items-center uppercase py-2">
                    Marvin sonnier and the Zydeo Stompers

                </div>
            </div>

            <div class="border-8 border-[#E5E6E7] grid grid-cols-[min-content,1fr]">
                <div class="bg-lightRed px-4 py-2 text-center text-[#fff] uppercase">
                    <div class="text-sm">December</div>
                    <div class="text-4xl">20</div>
                </div>
                <div class="text-center flex justify-center items-center uppercase py-2">
                    Marvin sonnier and the
                </div>
            </div>
        </div>
    </div>
</template>