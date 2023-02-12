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
      //masthead/subheaders
      'mastheadTitle':'#00007D',
      'mastheadNavLinks':'#1B283C',
      'subHeaderTitle':'#1B283C',

      //general
      'textLight':'#fff',
      'backgroundLight':'#202F46',
      'backgroundDark':'#1B283C',
      'accent':'#FBD551',

      'buttonColor':'#fff',
      'buttonBackground': '#011463',
      
      //components
      'titles':'#3769B3',
      'subTitles':'#2988C9',
      'bodyCopy':'#304555',
      'bulletBackground':'#d3d3d3'
    },

    //When changing the font here, you also need to change it in the nuxt.config.ts
    fontFamily:{
      'primary':['Open Sans'],
      'sans': ['Lato', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation:{
        fadeIn: 'fadeIn 4s ease-in-out',
      },
      
      keyframes: theme => ({
        fadeIn:{
          '0%':{opacity:0},
          '100%':{opacity:1}
        }
      })
    },
  },
  plugins: []
}