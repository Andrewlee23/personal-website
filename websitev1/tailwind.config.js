/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#D83F87", // Pink
        dark: "#2A1B3D", // Dark Purple
        accent: "#44318D", // Blueish Purple
        soft: "#E98074", // Soft Purple Pink
        muted: "#A4B3B6", // Muted Teal Grey
      }
    },
  },
  plugins: [],
}