/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        custom: ['MainFont', 'sans-serif'],
      },
      gridTemplateColumns: { '70/30': '70% 28%' },
      colors: {
        'black-Color': '#272626',
        'white-Color': '#FFFFFF',
        'card-color': '#5E5B59',
      },
    },
  },
  plugins: [],
};
