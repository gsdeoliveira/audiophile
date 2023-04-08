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
      'black': {
        DEFAULT: '#191919',
        hover: 'rgba(25, 25, 25, .9)',
        light: 'rgba(0, 0, 0, 0.5)',
        extralight: 'rgba(0, 0, 0, 0.07)',
      },
      'white': {
        DEFAULT: '#FFFFFF',
        light: 'rgba(255, 255, 255, .7)',
        extralight: 'rgba(255, 255, 255, .1)',
      },
      'gray': '#DCDCDC',
    },
    extend: {
      backgroundImage: {
        'circles': "url('../src/images/circles.svg)",
      },
    },
  },
  plugins: [],
}

