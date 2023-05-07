/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        almendra: ["Almendra", "serif"],
        grenze: ["Grenze", "cursive"],
        lacquer: ["Lacquer", "cursive"],
        longCang: ["Long Cang", "cursive"],
      },
    },
  },
  plugins: [],
};
