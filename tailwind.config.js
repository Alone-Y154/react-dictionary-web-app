/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      listStyleImage: {
        dot: 'url("../public/images/dot.svg")',
      },
    },
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '800px'},

      'sm': {'max': '700px'},  
      },
  },
  plugins: [],
}

