// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    pages: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/google-fonts',
        '@kevinmarrec/nuxt-pwa'
    ],

    pwa: {
        workbox: {
            enabled: true
        }
    },

    googleFonts: {
        //When changing the font here, you also need to change it in the tailwind.config.js
        families: {
            'Josefin Sans': [400, 700]
        }
    },
    typescript: { strict: true },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
})
