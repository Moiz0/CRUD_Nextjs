/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For app directory (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're using the pages directory
    "./components/**/*.{js,ts,jsx,tsx}" // For your custom components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
