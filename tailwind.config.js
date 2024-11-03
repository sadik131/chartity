/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,}","./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryFont:"#5c6a78",
        headingColor:"#15171A",
      },
      fontFamily:{
        inter:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

