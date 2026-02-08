/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6", // violet-500
        accent: "#ec4899"   // pink-500
      }
    },
  },
  plugins: [],
};
