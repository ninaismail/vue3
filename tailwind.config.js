/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat']
      },
      colors : {
        "accent1": "black",
        "accent2": "#D9D9D9",
        "bg1": "white",
        "bg2": "#EBF0F9",
        "bg3": "#E9E9E9"
      },
      backgroundOpacity: {
        10: '0.1',
      },
      backgroundImage: {
        'hero': 'url(/images/hero/hero.webp)'
      },
      aspectRatio: {
        '3.87/1': '3.87 / 1'
      }
    }
  },
  plugins: [],
}

