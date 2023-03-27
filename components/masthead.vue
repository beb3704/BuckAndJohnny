<template>
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
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
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
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 mr-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
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
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <div class="uppercase">view schedule</div>
                        </NuxtLink>
                    </div>
                </div>

            </Imagebox>

            <Imagebox url="/zydecobreakfeast.jpg" title="Menu" alt="Food" sub-title="Award-Winning Cuisine">

                <div class="text-textLight grid grid-cols-2 p-2 gap-10">

                    <div class="bg-lightRed py-1">
                        <div class="clip-right bg-lightRed"></div>
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.26 21.82" class="h-4 w-4 mr-2">
                                <defs>
                                </defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_2-2" data-name="Layer 2">
                                        <rect class="cls-1" x="4.49" y="2.6" width="11.29" height="16.62"
                                            transform="translate(-2.91 3.72) rotate(-18.26)" />
                                        <rect class="cls-1" x="1.82" y="5.27" width="16.62" height="11.29"
                                            transform="translate(-2.08 19.42) rotate(-82)" />
                                        <rect class="cls-1" x="1.82" y="5.27" width="16.62" height="11.29"
                                            transform="translate(-4.54 13.45) rotate(-56.95)" />
                                    </g>
                                </g>
                            </svg>
                            <div>VIEW OUR MENU</div>
                        </NuxtLink>
                    </div>
                </div>

            </Imagebox>

            <Imagebox url="/zydecobreakfeast.jpg" title="Order Now" alt="People Dancing"
                sub-title="and pick up ready to go">

                <div class="text-textLight grid grid-cols-2 p-2 gap-10">


                    <div class="bg-lightRed py-1">
                        <div class="clip-right bg-lightRed"></div>
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.26 21.82" class="h-4 w-4 mr-2">
                                <defs>
                                </defs>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_2-2" data-name="Layer 2">
                                        <rect class="cls-1" x="4.49" y="2.6" width="11.29" height="16.62"
                                            transform="translate(-2.91 3.72) rotate(-18.26)" />
                                        <rect class="cls-1" x="1.82" y="5.27" width="16.62" height="11.29"
                                            transform="translate(-2.08 19.42) rotate(-82)" />
                                        <rect class="cls-1" x="1.82" y="5.27" width="16.62" height="11.29"
                                            transform="translate(-4.54 13.45) rotate(-56.95)" />
                                    </g>
                                </g>
                            </svg>
                            <div>ORDER ONLINE</div>
                        </NuxtLink>
                    </div>
                </div>
            </Imagebox>

            <Imagebox url="/zydecobreakfeast.jpg" title="Book an event" alt="People Dancing"
                sub-title="beautiful event space options">

                <div class="text-textLight grid grid-cols-2 p-2 gap-10">
                    <div class="bg-lightRed py-1">
                        <div class="clip-right bg-lightRed"></div>
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.02 12.39" class="h-4 w-4 mr-2">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_2-2" data-name="Layer 2">
                                        <polygon class="cls-1"
                                            points="6.51 10.27 2.49 12.39 3.26 7.91 0 4.73 4.5 4.08 6.51 0 8.53 4.08 13.03 4.73 9.77 7.91 10.54 12.39 6.51 10.27" />
                                    </g>
                                </g>
                            </svg>
                            <div class="mt-1">LEARN MORE</div>
                        </NuxtLink>
                    </div>
                </div>
            </Imagebox>

            <Imagebox url="/zydecobreakfeast.jpg" title="Merchandise" alt="People Dancing" sub-title="grab some cajun swag">

                <div class="text-textLight grid grid-cols-2 p-2 gap-10">
                    <div class="bg-lightRed py-1">
                        <div class="clip-right bg-lightRed"></div>
                        <NuxtLink to="/"
                            class="flex items-center font-bold text-sm justify-center h-full w-full text-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.02 12.39" class="h-4 w-4 mr-2">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_2-2" data-name="Layer 2">
                                        <polygon class="cls-1"
                                            points="6.51 10.27 2.49 12.39 3.26 7.91 0 4.73 4.5 4.08 6.51 0 8.53 4.08 13.03 4.73 9.77 7.91 10.54 12.39 6.51 10.27" />
                                    </g>
                                </g>
                            </svg>
                            <div class="mt-1">SHOP ONLINE</div>
                        </NuxtLink>
                    </div>
                </div>
            </Imagebox>
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