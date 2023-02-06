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
      'buttonColor':'#ffffff',
      'buttonBackground': '#3769B3',
      'accent':'#FBD551',

      'mastheadTitle':'#fff',
      'mastheadNavLinks':'#1B283C',

      'textLight':'#fff',
      'backgroundLight':'#202F46',
      'backgroundDark':'#1B283C',

      'titles':'#3769B3',
      'subTitles':'#2988C9',
      'bodyCopy':'#304555'


    },

    //When changing the font here, you also need to change it in the nuxt.config.ts
    fontFamily:{
      'primary':['Open Sans'],
      // 'secondary':['Sassy Frass'],
      'secondary':['Roboto'],
    },
    extend: {},
  },
  plugins: []
}