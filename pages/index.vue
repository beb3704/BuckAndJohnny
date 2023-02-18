<template>
    <section>
        <TortugaMasthead></TortugaMasthead>

        <NuxtImg height="280" width="560" src="/lathamlogo.png" alt="Latham Brand Logo" class="m-auto" loading="lazy">
        </NuxtImg>


        <PrefabCenterblurb class="pt-10 pb-10" title="Family fun and relaxation" sub-title="is just a few clicks away"
            button-text="is just a few clicks away" button-url="https://www.google.com"
            background-image-alt="blueBackground" background-url="/bluebackground.png">
            Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium. Suspendisse potenti. Morbi ut augue
            id risus bibendum consequat. Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit amet
            interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis ante. Maecenas interdum, diam at
            sollicitudin consectetur, nunc magna pulvinar nibh, sodales semper diam purus sit amet nunc.
            Pellentesque ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris ornare quam sit amet
            nunc hendrerit placerat. Vestibulum sit amet ligula molestie, auctor elit eu, maximus diam. Vivamus ut
            lacus semper, consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et lacus porta lacinia.
        </PrefabCenterblurb>

    </section>
</template>

<script setup>

useSeoMeta({
    title: "A Better title",
    ogTitle: "A Good Title",
    description: "A dank page",
    ogDescription: "A dank Page",
    ogImage: '/logo.png',
    ogSiteName: 'Pools & Spas'
});
</script>
