<template>
    <div>
        <BiscayneMasthead></BiscayneMasthead>
        <NuxtImg height="280" width="560" src="/lathamlogo.png" alt="Latham Brand Logo" class="m-auto" loading="lazy">
        </NuxtImg>




        <div class="pt-10 pb-10">
            <MediaBackgroundimage alt="blue background" url="/bluebackground.png"></MediaBackgroundimage>
            <ElementH3 class="text-center">
                Family fun and relaxation
            </ElementH3>
            <ElementH4 class="text-center mt-2">
                is just a few clicks away
            </ElementH4>
            <ElementP>
                Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium. Suspendisse potenti. Morbi ut augue
                id risus bibendum consequat. Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit amet
                interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis ante. Maecenas interdum, diam at
                sollicitudin consectetur, nunc magna pulvinar nibh, sodales semper diam purus sit amet nunc.
                Pellentesque ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris ornare quam sit amet
                nunc hendrerit placerat. Vestibulum sit amet ligula molestie, auctor elit eu, maximus diam. Vivamus ut
                lacus semper, consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et lacus porta lacinia.
            </ElementP>
            <BiscayneExternallinkbutton text="Get Started Now" url="https://google.com" class="m-auto mt-10">
            </BiscayneExternallinkbutton>
        </div>

    </div>

</template>

<script setup>

useSeoMeta({
    title: "A Better title",
    ogTitle: "A Good Title",
    description: "A dank page",
    ogDescription: "A dank Page",
    ogImage: '/picture.jpg'
});
</script>
