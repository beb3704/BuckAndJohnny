<template>
  <section>
    <BiscayneSubhead title="Components"></BiscayneSubhead>

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

    <!-- Center Blurb -->
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
    </PrefabCenterblurb>

    <!-- double blurb -->

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

    <!-- bullet blurb -->
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
      <PrefabBulletblurb
        title="et dapibus"
        sub-title="Nunc ullamcorper eu pretium"
      >
        <li>Suspendisse et dapibus orci.</li>
        <li>Suspendisse et dapibus orci.</li>
        <li>Suspendisse et dapibus orci.</li>
        <li>Suspendisse et dapibus orci.</li>
        <li>Suspendisse et dapibus orci.</li>
        <li>Suspendisse et dapibus orci.</li>
      </PrefabBulletblurb>
    </div>

    <!-- hover images -->
    <div class="max-w-7xl m-auto grid md:grid-cols-2">
      <NuxtLink to="/">
        <PrefabHoverimage
          url="/hottie.jpg"
          imgAlt="hottie"
          title="A Cool Title"
          sub-title="A cooler subTitle"
          :style="HoverBoxStyles.BottomText"
        >
        </PrefabHoverimage>
      </NuxtLink>

      <NuxtLink to="/">
        <PrefabHoverimage
          :style="HoverBoxStyles.Default"
          url="/hottie.jpg"
          imgAlt="hottie"
          title="A Cool Title"
          sub-title="A cooler subTitle"
        >
        </PrefabHoverimage>
      </NuxtLink>

      <NuxtLink to="/">
        <PrefabHoverimage
          url="/hottie.jpg"
          imgAlt="hottie"
          title="A Cool Title"
          sub-title="A cooler subTitle"
        >
        </PrefabHoverimage>
      </NuxtLink>

      <NuxtLink to="/">
        <PrefabHoverimage
          url="/hottie.jpg"
          imgAlt="hottie"
          title="A Cool Title"
          sub-title="A cooler subTitle"
        >
        </PrefabHoverimage>
      </NuxtLink>
    </div>
  </section>
</template>

<script  setup lang="ts">
import Logocarousel from "~~/components/media/logocarousel.vue";
import { HoverBoxStyles } from "~~/models/hoverboxstyles";

useSeoMeta({
  title: "A Better title",
  ogTitle: "A Good Title",
  description: "A dank page",
  ogDescription: "A dank Page",
  ogImage: "/poolcorp-logo.png",
});
</script>