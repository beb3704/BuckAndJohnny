<template>
  <section>
    <MarlinSubhead title="Pools & Spas"></MarlinSubhead>
    <!-- 
    <MediaImagecarousel
      :slides="[
        'https://splashdownstorage.blob.core.windows.net/splashdown/86c7c2db-a269-4c09-a072-e18104bc579a/1178f029-2895-424e-98a9-a2b133bc1794-pool-content-34.jpg',
        'https://splashdownstorage.blob.core.windows.net/splashdown/86c7c2db-a269-4c09-a072-e18104bc579a/bd79fc33-9bc5-4eec-9728-bfc60fe2b761-pool-content-46.jpg',
        'https://splashdownstorage.blob.core.windows.net/splashdown/86c7c2db-a269-4c09-a072-e18104bc579a/bd79fc33-9bc5-4eec-9728-bfc60fe2b761-pool-content-46.jpg',
        'https://splashdownstorage.blob.core.windows.net/splashdown/86c7c2db-a269-4c09-a072-e18104bc579a/bd79fc33-9bc5-4eec-9728-bfc60fe2b761-pool-content-46.jpg',
        'https://splashdownstorage.blob.core.windows.net/splashdown/86c7c2db-a269-4c09-a072-e18104bc579a/bd79fc33-9bc5-4eec-9728-bfc60fe2b761-pool-content-46.jpg',
      ]"
    ></MediaImagecarousel>

    <MediaLogocarousel></MediaLogocarousel>


    <PrefabCenterblurb
      class="pt-10 pb-10"
      title="Family fun and relaxation"
      sub-title="is just a few clicks away"
      button-text="is just a few clicks away"
      button-url="https://www.google.com"
      background-image-alt="blueBackground"
      background-url="/bluebackground.png"
    >
      Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium.
      Suspendisse potenti. Morbi ut augue id risus bibendum consequat.
      Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit
      amet interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis
      ante. Maecenas interdum, diam at sollicitudin consectetur, nunc magna
      pulvinar nibh, sodales semper diam purus sit amet nunc. Pellentesque
      ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris
      ornare quam sit amet nunc hendrerit placerat. Vestibulum sit amet ligula
      molestie, auctor elit eu, maximus diam. Vivamus ut lacus semper,
      consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et lacus
      porta lacinia.
    </PrefabCenterblurb> -->

    <!-- double blurb

    <div class="p-4 max-w-6xl m-auto grid lg:grid-cols-2 gap-12 py-10">
      <PrefabBlurb
        title="Suspendisse et dapibus"
        sub-title="Nunc ullamcorper eu risus eu pretium"
      >
        Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium.
        Suspendisse potenti. Morbi ut augue id risus bibendum consequat.
        Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit
        amet interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis
        ante. Maecenas interdum, diam at sollicitudin consectetur, nunc magna
        pulvinar nibh, sodales semper diam purus sit amet nunc. Pellentesque
        ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris
        ornare quam sit amet nunc hendrerit placerat. Vestibulum sit amet ligula
        molestie, auctor elit eu, maximus diam. Vivamus ut lacus semper,
        consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et
        lacus porta lacinia.
      </PrefabBlurb>
      <PrefabBlurb title="et dapibus" sub-title="Nunc ullamcorper eu pretium">
        Suspendisse et dapibus orci. Nunc ullamcorper eu risus eu pretium.
        Suspendisse potenti. Morbi ut augue id risus bibendum consequat.
        Vestibulum sed turpis massa. Nulla cursus facilisis dolor. Quisque sit
        amet interdum ante. Aliquam eget nulla rutrum, cursus nibh vitae, mollis
        ante. Maecenas interdum, diam at sollicitudin consectetur, nunc magna
        pulvinar nibh, sodales semper diam purus sit amet nunc. Pellentesque
        ornare velit quis libero malesuada, a pretium tortor pulvinar. Mauris
        ornare quam sit amet nunc hendrerit placerat. Vestibulum sit amet ligula
        molestie, auctor elit eu, maximus diam. Vivamus ut lacus semper,
        consectetur ipsum fermentum, imperdiet sem. Maecenas lacinia dui et
        lacus porta lacinia.
      </PrefabBlurb>
    </div>
  -->

    <!-- hover images -->
    <br />
    <br />
    <div class="max-w-7xl m-auto grid md:grid-cols-2 gap-6">
      <NuxtLink to="https://markfrazier.splashdownweb.net/gunite-pools">
        <PrefabHoverimage
          url="/hottie.jpg"
          imgAlt="hottie"
          title="GUNITE POOLS"
          sub-title="BUILD AND PRICE NOW!"
        >
        </PrefabHoverimage>
      </NuxtLink>

      <NuxtLink to="https://markfrazier.splashdownweb.net/fiber-glass-pools">
        <PrefabHoverimage
          url="/kid.jpg"
          imgAlt="hottie"
          title="FIBERGLASS POOLS"
          sub-title="BUILD AND PRICE NOW!"
        >
        </PrefabHoverimage>
      </NuxtLink>
    </div>
    <!-- bullet blurb -->
    <div class="max-w-7xl m-auto grid lg:grid-cols-2 gap-10 py-10">
      <PrefabBulletblurb title="et dapibus" sub-title="Gunite Pool Pros">
        <li>Long-Term Durability</li>
        <li>Completely Customizable Dimensions</li>
        <li>Accommodates Special Features</li>
      </PrefabBulletblurb>
      <PrefabBulletblurb title="et dapibus" sub-title="Gunite Pool Cons">
        <li>Needs Resurfacing Every 10-15 yrs</li>
        <li>Longer Install Period: 1.5-3 Months</li>
        <li>Rougher Surface, Can be Abrasive</li>
      </PrefabBulletblurb>
      <PrefabBulletblurb title="et dapibus" sub-title="Fiberglass Pool Pros">
        <li>Lower Maintenance Costs</li>
        <li>Non-Porous Surface, Inhibits Algae</li>
        <li>Shorter Install Period: 2-3 Weeks</li>
      </PrefabBulletblurb>
      <PrefabBulletblurb title="et dapibus" sub-title="Fiberglass Pool Cons">
        <li>Limited Dimensions</li>
        <li>Surface can be Slippery</li>
        <li>Limited Special Features</li>
      </PrefabBulletblurb>
    </div>
  </section>
</template>

<script  setup lang="ts">
import Logocarousel from "~~/components/media/logocarousel.vue";
import { HoverBoxStyles } from "~~/models/hoverboxstyles";

useSeoMeta({
  title: "A Better title",
  ogTitle: "A Good Title",
  description: "Mark's Page",
  ogDescription: "Mark's Page",
  ogImage: "/poolcorp-logo.png",
});
</script>