/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100'
      },
      colors: {
        'primary-dark': '#151515',
        'secondary-dark': '#301B3F',
        'accent-dark': '#3C415C',
        'highlight-dark': '#B4A5A5',
        'primary-light': '#FFF4E0',
        'secondary-light': '#FFBF9B',
        'accent-light': '#B46060',
        'highlight-light': '#4D4D4D'
      }
    }
  },
  plugins: []
};
