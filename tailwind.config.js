/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
  extend: {
    animation: {
      'marquee-smooth': 'marquee-smooth 30s linear infinite',
    },
    keyframes: {
      'marquee-smooth': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
},

  plugins: [],
}