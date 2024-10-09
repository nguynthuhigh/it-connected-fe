/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bor-color-grey": "#BDBDBD",
        "forgotten": "#0075FF",
        "blue-main": "#0094FF",
        "blue-extra": "#E7F5FF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    plugins: [],
  },
};
