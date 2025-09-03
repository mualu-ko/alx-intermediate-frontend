/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",     // explicitly include root index.html
    "./*.html",         // catch any other html in root
    "./src/**/*.{html,js}" // catch files inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
