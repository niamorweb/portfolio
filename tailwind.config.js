/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: [
        (colorBg = "#131212"),
        (colorNeutral1 = "#E3E4E6"),
        (colorNeutral2 = "rgba(227, 228, 230, 0.55)"),
        (colorPrimary = "#BC3CD8"),
      ],
    },
  },
  plugins: [],
};
