<template>
    <section>
        <MarlinMasthead></MarlinMasthead>

        <PrefabCenterblurb class="pt-10 pb-10" title="EXPERIENCE MEETS QUALITY "
            sub-title="FROM A TRUSTED LOCAL BUILDER" button-text="is just a few clicks away"
            button-url="https://precisionpools.splashdownweb.net/fiber-glass-pools">
            Precision Pools and Landscape is a Louisiana Licensed swimming pool contractor installing high quality
            fiberglass swimming pools in the Baton Rouge / Gonzales area. We also specialize in landscape, irrigation,
            and outdoor kitchens. Let us help design and create your very own private oasis. Swim in days with Precision
            Pools and Landscape!
        </PrefabCenterblurb>

        <MediaLogocarousel></MediaLogocarousel>
        <MediaImagecarousel :slides="[
            '/image1.jpg',
            '/image2.jpg',
            '/image3.jpg',
            '/image4.jpg',
            '/image5.jpg',
        ]"></MediaImagecarousel>

    </section>
</template>

<script setup>
useSeoMeta({
    title: "Precision Swimming Pools in Gonzales, LA | Baton Rouge",
    ogTitle: "Precision Swimming Pools in Gonzales, LA | Baton Rouge",
    description: "Build your swimming pool or backyard paradise in Gonzales, LA near Baton Rouge with Precision Pools and Landscape. Whether you'd like a totally custom pool, or a full backyard designed, we've got you covered.",
    ogDescription: "Build your swimming pool or backyard paradise in Gonzales, LA near Baton Rouge with Precision Pools and Landscape. Whether you'd like a totally custom pool, or a full backyard designed, we've got you covered.",
    ogImage: '/logo.png',
    ogSiteName: "Precision Swimming Pools in Gonzales"
});
</script>
