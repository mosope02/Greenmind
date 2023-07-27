/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
        'playfair': ['Playfair Display'],
        'poppins': 'poppins'
      },
    extend: {
      border: {
        'border': ['1px solid red']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}