// https://nuxt.com/docs/api/configuration/nuxt-config

const setSSRMode = () => {
    const environment = process.env.SET_SSR_TO_FALSE;
    if (environment) {
        return false;
    }
    return true;
};

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    pages: true,
    ssr: setSSRMode(),
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@kevinmarrec/nuxt-pwa',
        '@nuxt/image-edge',
        'nuxt-delay-hydration',
        'nuxt-swiper'
    ],
    image: {
        domains: ['splashdownstorage.blob.core.windows.net']
    },
    googleFonts: {
        //When changing the font here, you also need to change it in the tailwind.config.js
        families: {
            'Sassy Frass': [400, 700],
            'Open Sans': [400, 700],
        }
    },
    pwa: {
        meta: {
            name: "Pools & Spas",
            author: "Ike Melancon",
            description: "Pools & Spas",
        },
    },

    delayHydration: { mode: 'mount' },
    typescript: { strict: true },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            }
        },
        pageTransition: { name: 'page', mode: 'out-in', appear: true }
    }

})
