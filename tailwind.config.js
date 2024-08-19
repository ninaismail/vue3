/** @type {import('tailwindcss').Config} */
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
        '2.08/1': '2.08 / 1',
        '2.54/1': '2.54 / 1'
      },      
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      width: {
        'custom': 'calc(100% - 27rem)', // Subtracts 27rem (mx-108) from 100%
      },
    }
  },
  plugins: [],
}

