/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bor-color-grey': '#BDBDBD',
        'forgotten': '#1814F3',
        'btn-login': '#1814F3'
      }
    },
  },
  plugins: [],
}

