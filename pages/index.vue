<template>
    <div>
        <BiscayneMasthead></BiscayneMasthead>
        <NuxtImg height="300" src="/lathamlogo.png" class="m-auto"></NuxtImg>
        <div>
            <MediaBackgroundimage alt="blue background" url="/bluebackground.png"></MediaBackgroundimage>
            <h3 class="text-center pt-16 text-5xl uppercase text-primary">Family fun and relaxation</h3>
            <h4 class="text-center text-xl uppercase tracking-widest mt-3">is just a few clicks away</h4>
            <p class="text-justify max-w-5xl m-auto mt-10 text-lg leading-10">
                Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium. Suspendisse potenti. Morbi ut augue
                id risus bibendum consequat. Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit amet
                interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis ante. Maecenas interdum, diam at
                sollicitudin consectetur, nunc magna pulvinar nibh, sodales semper diam purus sit amet nunc.
                Pellentesque ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris ornare quam sit amet
                nunc hendrerit placerat. Vestibulum sit amet ligula molestie, auctor elit eu, maximus diam. Vivamus ut
                lacus semper, consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et lacus porta lacinia.
            </p>
            <BiscayneExternallinkbutton text="Get Started Now" url="https://google.com" class="m-auto mt-10">
            </BiscayneExternallinkbutton>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
