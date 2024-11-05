/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter var"', ...defaultTheme.fontFamily.sans],
        'lato': ["Lato", "sans-serif"],
      },
    },
    screens: {
      'mobile': '550px',
      'laptop': '1100px'
    }
  },
  plugins: [],
}

