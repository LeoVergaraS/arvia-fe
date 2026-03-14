/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1f3a30',
        'light-yellow': '#FAE45E26',
        'gold': '#C4A35E',
        'dark': '#4A4A4A',
        'primary-white': '#FEFEFC'
      }
    },
  },
  plugins: [],
}

