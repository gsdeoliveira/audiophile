/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./**/*.{html,js}"
],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    colors: {
      'primary': {
        DEFAULT: '#D87D4A',
        light: '#FBAF85',
      },
      'black': '#191919',
      'white': {
        DEFAULT: '#FFFFFF',
        light: 'rgba(255, 255, 255, .5)',
        extralight: 'rgba(255, 255, 255, .1)',
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('../src/images/image-hero.jpg')",
      },
    },
  },
  plugins: [],
}

