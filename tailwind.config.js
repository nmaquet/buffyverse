/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        almendra: ["Almendra", ...defaultTheme.fontFamily.sans],
        grenze: ["Grenze", ...defaultTheme.fontFamily.sans],
        lacquer: ["Lacquer", ...defaultTheme.fontFamily.sans],
        longCang: ["Long Cang", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
