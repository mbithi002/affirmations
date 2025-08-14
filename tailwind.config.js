/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["emerald"],
    darkTheme: "emerald",
  },
}
