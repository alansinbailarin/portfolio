/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "noto-sans"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
