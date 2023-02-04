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
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Josefin Sans': [400, 700]
        }
    },
    typescript: { strict: true }
})
