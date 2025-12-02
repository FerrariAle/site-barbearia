/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': { // Cor de Acento (o marrom escuro)
          'DEFAULT': '#483D38',
          'light': '#6D5C54', // Tom mais claro para hovers
          'dark': '#3A2E2A',  // Tom mais escuro
        },
        'background': { // Fundo Principal (branco quente)
          'DEFAULT': '#FAF8F5',
        },
        'background-alt': { // Fundo Secundário (bege/cinza)
          'DEFAULT': '#E8E3DD',
        },
        // Manter as cores neutras para textos é uma boa prática
        'text-primary': '#1c1917', // Quase preto, mas mais quente
        'text-secondary': '#78716c', // Cinza quente para textos secundários
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
