<template>
  <section>
    <MarlinMasthead></MarlinMasthead>

    <NuxtImg
      height="280"
      width="560"
      src="/imagine.png"
      alt="Latham Brand Logo"
      class="m-auto"
      loading="lazy"
    >
    </NuxtImg>

    <PrefabCenterblurb
      class="pt-10 pb-10"
      title="Family fun and relaxation"
      sub-title="is just a few clicks away"
      button-text="is just a few clicks away"
      button-url="/pools-and-spas"
      background-image-alt="blueBackground"
      background-url="/bluebackground.png"
    >
      Making the decision to build a swimming pool is an easy one, especially
      once you consider the many benefits of pool ownership. If the decision to
      build is simple, selecting the shape, size and “look” of is a little more
      challenging. The options available today are literally limitless, and your
      pool can range from the traditional rectangular pool of your childhood
      days to a more sophisticated tropical paradise pool that rivals the finest
      creations of Mother Nature. Luckily, at Mark Frazier Pools we offer a fun,
      interactive way to shop for pools.</PrefabCenterblurb
    >
  </section>
</template>

<script setup>
useSeoMeta({
  title: "A Better title",
  ogTitle: "A Good Title",
  description: "Awesome Page",
  ogDescription: "Awesome Page",
  ogImage: "/poolcorp-logo.png",
  ogSiteName: "Pools & Spas",
});
</script>
