/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' if you prefer
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
        // Example: primary: '#ff69b4',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inter1: ["inter1", "sans-serif"],
      },
    },
  },
};