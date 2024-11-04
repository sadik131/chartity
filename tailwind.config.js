/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,}","./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./img/hero-bg.svg')",
      },
      colors:{
        primaryFont:"#5c6a78",
        headingColor:"#15171A",
        secendary:"#2d68f8",
      },
      fontFamily:{
        inter:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

