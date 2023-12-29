/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'a4-w': '210mm',
        'a4-h': '297mm',
      },
    },
  },
  plugins: [],
}