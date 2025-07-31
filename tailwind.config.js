/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './component/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4D9393',
        secondary: '#86CC99',
        accent: '#F7F7F7',
        dark: '#2C3E50',
        light: '#FFFFFF',
      },
    },
  },
  plugins: [],
}