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
        'card-color':
          'linear-gradient(to bottom, rgba(79, 76, 74, 0.9), rgba(94, 91, 89, 0.8), rgba(108, 105, 103, 0.9))',
      },
    },
  },
  plugins: [],
};
