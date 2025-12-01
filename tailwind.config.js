/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          '50': '#fdf8f6',
          '100': '#f2e8e5',
          '200': '#eaddd7',
          '300': '#e0cec7',
          '400': '#d2bab0',
          '500': '#bfa094',
          '600': '#a18072',
          '700': '#976654',
          '800': '#845345',
          '900': '#714539'
        },
        'cream': '#F5F5DC',
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
