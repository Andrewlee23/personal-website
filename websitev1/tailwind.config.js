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
        soft: "#ccccff", // Soft Purple Pink
        muted: "#A4B3B6", // Muted Teal Grey
        mutedgrey : "#444444",
        darkergrey: "#222222",
        //pastels
        pastel1: "#FFB3BA", // Light Pink
        pastel2: "#FFDFBA", // Light Orange
        pastel3: "#FFFFBA", // Light Yellow
        pastel4: "#BAFFC9", // Light Green
        pastel5: "#BAE1FF", // Light Blue
        pastel6: "#FFBAE1", // Light Purple
      },
      fontFamily: {
        pixel: ['VT323', 'monospace'],
      }
    },
  },
  plugins: [],
}