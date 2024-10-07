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
        'btn-login': '#0075FF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
}
