/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6 ",
        secondary: "#1E293B"
      },
      fontFamily: {
       poppins : ["Poppins", "serif"],
       roboto : ["Roboto", 'serif']
      },
      screens:{
        '3xl':'1900px'
      }
    },
  },
  plugins: [require('daisyui'),],
}