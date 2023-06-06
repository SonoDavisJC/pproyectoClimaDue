/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Geologica", "sans-serif"]
      }
    },
    fontFamily: {
      "sans": ["Asap Condensed", "sans-serif"]
    }
  },
  plugins: [],
}

