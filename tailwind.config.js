const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        "brand-purple": "#6851ff",
        "brand-purple-text": "#522FD4",
        "brand-purple-light": "#EDEBFF",
      },
    },
  },
  plugins: [],
};
