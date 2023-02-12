// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    pages: true,
    ssr: false,
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

    delayHydration: { mode: 'mount' },
    typescript: { strict: true },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            }
        },
        pageTransition: { name: 'page', mode: 'out-in', appear: true }
    },


})
