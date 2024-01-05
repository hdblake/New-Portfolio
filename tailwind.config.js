/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      header: ["Ubuntu", "sans-serif"],
      mainText: ["Prompt", "sans-serif"],
    },
    colors: {
      primary: "#f57701",
      secondary: "#017ff5",
      accent: "#000",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
