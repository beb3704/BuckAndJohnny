/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  theme: {
    colors:{
      'primary':'#253b51FF',
      'primaryDark':'#0D2E38',
      'primaryText':'#ffffff',
      'buttonColor':'#ffffff',
      'buttonBackground': '#1573e5FF'
    },

    //When changing the font here, you also need to change it in the nuxt.config.ts
    fontFamily:{
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: []
}