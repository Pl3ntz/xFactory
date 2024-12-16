/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#ff1f71',
          600: '#e31863',
          700: '#c71458',
        },
        purple: {
          600: '#7b2ff7',
          700: '#6422d1',
        },
      },
    },
  },
  plugins: [],
};