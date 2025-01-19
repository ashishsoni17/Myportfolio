/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        wave: 'wave 2s ease-in-out infinite',
      },
      keyframes:{
        wave : {
          '0%,100%': {transform : 'rotate(0deg)'},
          '50%':{transform : 'rotate(20deg)'},
        },
      },
    },
  },
  plugins: [],
}

