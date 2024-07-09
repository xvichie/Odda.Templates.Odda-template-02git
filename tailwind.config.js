const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",flowbite.content(),],
  theme: {
    extend: {
      colors: {
        primary: '#c0392b', // Blue button color
        secondary: '#23262d', // Dark background color
        lightBackground: "#f0f1f2",
        lightBackground2:"#30394f",
        darkBackground: "#141416"
      },
      fontFamily: {
        mrgvlovani: ["Mrgvlovani", "sans-serif"],
        mtavvruli: ["Mtavruli", "sans-serif"]
      },
    },
  },
  plugins: [flowbite.plugin(),],
};