/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        inputShadow: "0 1px 6px #20212447",
      },
      colors: {
        borderColor: "rgba(223,225,229,0)"
      }
    },
  },
  plugins: [],
}

