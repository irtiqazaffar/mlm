/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f6f8f",
        lightBlue: "#d9e9f2",
        sectionBlue: "#eaf4fa",
        darkText: "#1f2937",
        mutedText: "#6b7280",
      },
    },
  },
  plugins: [],
};