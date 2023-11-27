/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [require("tailwindcss-safe-area")],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      addUtilities(newUtilities);
    },
    require("tailwindcss-safe-area"),
  ],
};
