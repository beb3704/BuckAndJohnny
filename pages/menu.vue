<template>
    <div>
        <Bnjnav></Bnjnav>
        <SubHeader title="menu" sub-title="delicious choices for every meal">
            <div class="text-textLight grid grid-cols-2 p-2 gap-10 m-auto" style="width:375px">

                <div class="bg-lightRed py-1">
                    <div class="clip-right bg-lightRed"></div>
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

                <div class="bg-darkRed py-1">
                    <div class="clip-left bg-darkRed"></div>
                    <NuxtLink to="/"
                        class="flex items-center font-bold text-sm justify-center h-full w-full text-center -ml-2">
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

                        <div class="uppercase">ORDER ONLINE</div>
                    </NuxtLink>
                </div>
            </div>

        </SubHeader>

        <div class="bg-[#000]">
            <h4 class="text-[#fff] uppercase text-center text-3xl font-bold py-4">Lunch & dinner</h4>

        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 m-auto max-w-6xl">
            <div class="flex m-auto py-3 col-span-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 text-lightRed mr-2">
                    <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <div class="text-lightRed uppercase mb-6">
                    fan favorites
                </div>
            </div>

            <h5 class="col-span-full m-auto text-3xl uppercase font-bold text-darkRed tracking-widest mb-10">starters</h5>

            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Praline chicken</div>
                <div class="text-lightRed font-bold ml-auto">8.99</div>
                <div class="col-span-full">boneless chicken fried golden brown and hand-tossed in our famous praline sauce
                </div>
                <div class="absolute top-7 left-3 md:-left-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-4 h-4 text-lightRed mr-2">
                        <path
                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Garlic Bites</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">bite-size garlic bread served with marinara
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Spinach & Artichoke dip</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">creamy spinach dip topped with cheddar cheese served with homemade tortilla chips
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Praline chicken</div>
                <div class="text-lightRed font-bold ml-auto">8.99</div>
                <div class="col-span-full">boneless chicken fried golden brown and hand-tossed in our famous praline sauce
                </div>

            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Garlic Bites</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">bite-size garlic bread served with marinara
                </div>
                <div class="absolute top-7 left-3 md:-left-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-4 h-4 text-lightRed mr-2">
                        <path
                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Spinach & Artichoke dip</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">creamy spinach dip topped with cheddar cheese served with homemade tortilla chips
                </div>
            </div>

            <h5 class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10">
                ANOTHER SUB
                HEADER</h5>
            <h6 class="col-span-full m-auto uppercase font-bold text-sm text-[#929497] tracking-widest mb-10">ANOTHER
                SUBSUB
                HEADER</h6>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Praline chicken</div>
                <div class="text-lightRed font-bold ml-auto">8.99</div>
                <div class="col-span-full">boneless chicken fried golden brown and hand-tossed in our famous praline sauce
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Garlic Bites</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">bite-size garlic bread served with marinara
                </div>
            </div>

            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Spinach & Artichoke dip</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">creamy spinach dip topped with cheddar cheese served with homemade tortilla chips
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Praline chicken</div>
                <div class="text-lightRed font-bold ml-auto">8.99</div>
                <div class="col-span-full">boneless chicken fried golden brown and hand-tossed in our famous praline sauce
                </div>
            </div>

            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Garlic Bites</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">bite-size garlic bread served with marinara
                </div>
            </div>


            <div class="grid grid-cols-[1fr,min-content]  py-6 md:px-4 px-8 content-start">
                <div class="uppercase font-bold">Spinach & Artichoke dip</div>
                <div class="text-lightRed font-bold ml-auto">6.99</div>
                <div class="col-span-full">creamy spinach dip topped with cheddar cheese served with homemade tortilla chips
                </div>
            </div>

            <h5
                class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10 mb-10">
                Pizza</h5>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>

            <h5
                class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10 mb-10">
                Pizza</h5>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>

            <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
                <div class="uppercase font-bold col-span-full mb-2 text-center">Speciality Sauce</div>
                <div class="text-[#929497] text-center">6"</div>
                <div class="text-[#929497] text-center">10"</div>
                <div class="text-[#929497] text-center">14"</div>
                <div class="text-lightRed text-center">6.49</div>
                <div class="text-lightRed text-center">10.49</div>
                <div class="text-lightRed text-center">14.99</div>
                <p class="col-span-full text-[#929497] text-center">pesto, bbq sauce, roasted garlic sauce</p>
            </div>



        </div>


        <div class="bg-[#000]">
            <h4 class="text-[#fff] uppercase text-center text-3xl font-bold py-4">ZYDECO BREAKFAST <span
                    class="text-sm">(saturdays only)</span></h4>

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