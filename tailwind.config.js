/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#6D4C41",
        secondary: "#F57C00",
        base: "#FFF8F0",
        ink: {
          50: "#fdf8f3",
          100: "#f7efe7",
          200: "#e9ded5",
          300: "#d8c7bc",
          400: "#bca79a",
          500: "#9a7f73",
          600: "#7c6257",
          700: "#5f4a41",
          800: "#3f2f29",
          900: "#2b201c",
          950: "#1c1411",
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(61, 43, 36, 0.18)",
      },
    },
  },
  plugins: [],
}

