// https://nuxt.com/docs/api/configuration/nuxt-config

const setSSRMode = () => {
  const environment = process.env.SET_SSR_TO_FALSE;
  if (environment) {
    return false;
  }
  return true;
};

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  pages: true,
  ssr: setSSRMode(),
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/image-edge",
    "nuxt-delay-hydration",
    "nuxt-swiper",
  ],
  image: {
    domains: ["splashdownstorage.blob.core.windows.net"],
  },
  googleFonts: {
    //When changing the font here, you also need to change it in the tailwind.config.js
    families: {
      Jost: [400, 700],
    },
  },
  pwa: {
    meta: {
      name: "Buck & Johnnys Restaurant",
      author: "Ike Melancon",
      description: "Buck & Johnnys Restaurant",
    },
  },
  delayHydration: { mode: false },
  typescript: { strict: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in", appear: true },
  },
});
