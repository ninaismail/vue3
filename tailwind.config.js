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
        "bg1": "white"
      },
      backgroundOpacity: {
        10: '0.1'
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

