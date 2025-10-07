/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#E63946",
        darkAccent: "#1D3557",
      }
    },
  },
  plugins: [],
}
