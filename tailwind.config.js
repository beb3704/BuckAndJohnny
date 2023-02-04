/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  head:{
link:[
  {rel:'preconnect',href:'https://fonts.googleapis.com'},
  {rel:'preconnect',href:'https://fonts.gstatic.com'}
]
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily:{
      'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}