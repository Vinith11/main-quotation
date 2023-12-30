/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
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