/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".bg-texture": {
          backgroundImage: "url('src/assets/frames/texture.jpg')",
        },
      };

      addUtilities(newUtilities, ["hover"]);
    }),
  ],
};
