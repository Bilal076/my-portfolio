/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121212",
          800: "#1B1C1E",
          900: "#131417",
          border: "#2B2C30",
        },
        paper: {
          DEFAULT: "#FAFAFA",
          100: "#FFFFFF",
          200: "#F1F1F0",
          border: "#E7E7E5",
        },
        muted: "#6E7175",
        signal: "#1FAE5A",
      },
      fontFamily: {
        display: ["'Archivo'", "sans-serif"],
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
