/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],

  theme: {
    colors:{
      //masthead/subheaders
      'mastheadTitle':'#fff',
      'mastheadNavLinks':'#0D303A',
      'subHeaderTitle':'#0D303A',

      //general
      'lightRed': '#BB2332',
      'darkRed' : '#7C1125',
      'textLight':'#fff',
      'backgroundLight':'#000',
      'backgroundDark':'#1B283C',
      'accent':'#ff0000',

    
      'buttonColor':'#2D6166',
      'buttonBackground': '#fff',
      
      //components
      'titles':'#3769B3',
      'subTitles':'#2988C9',
      'bodyCopy':'#304555',
      'bulletBackground':'#d3d3d3',

      //mobile
      'navBackgroundDark':"#9EEDF3",
      'navBackgroundLight':"#A5ECF5",
      'navIconColor':"#2C676E",
      'navTextLinks': "#2C676E"
    },

    //When changing the font here, you also need to change it in the nuxt.config.ts
    fontFamily:{
      'primary':['Jost'],
      'sans': ['Jost', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation:{
        fadeIn: 'fadeIn 4s ease-in-out',
        smallBounceUp:'bounceUp 1s ease-in-out infinite',
        smallBounceDown:'bounceDown 10s ease-in-out infinite'
      },
      
      keyframes: theme => ({
        fadeIn:{
          '0%':{opacity:0},
          '100%':{opacity:1}
        },
        bounceUp:{
          '0%, 100%':{
            transform:"translateY(5%)",
            'animation-timing-function': "cubic-bezier(0.8,0,1,1)"
          },
          '50%':{
            transform:"none",
            'animation-timing-function': "cubic-bezier(0,0,0.2,1)"
          }
        },
        bounceUp:{
          '0%, 100%':{
            transform:"translateY(-5%)",
            'animation-timing-function': "cubic-bezier(0.8,0,1,1)"
          },
          '50%':{
            transform:"none",
            'animation-timing-function': "cubic-bezier(0,0,0.2,1)"
          }
        }
      })
    },
  },
  plugins: []
}