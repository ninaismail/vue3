/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat']
      },
      colors : {
        "affwhite": "#D9D9D9",
        "grey": "#E9E9E9",
        "gold": "#CCBB99",
        "olive": "#53554A"
      },
      backgroundOpacity: {
        10: '0.1',
        77: '0.77',
      },
      aspectRatio: {
        '3.87/1': '3.87 / 1',
        '2/1': '2 / 1',
        '2.25/1': '2.25 / 1',
        '0.68/1': '0.68 / 1',
        '0.98/1': '0.98 / 1',
        '1.68/1':'1.68 / 1',
        '1.07/1':'1.07 / 1',
      },      
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      width: {
        'custom': 'calc(100% - 27rem)', // Subtracts 27rem (mx-108) from 100%
      },
      backgroundImage: {
        'hero':'url(/images/hero/hero_v1.webp)',
      }, 
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      }
    }
  },
  plugins: [],
}

