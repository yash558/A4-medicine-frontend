/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [    
    require('tailwind-scrollbar'),
],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
      }
    },
  }, 
}