/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: [
        (colorBg = "#EEEEEE"),
        (colorNeutral1 = "#373737"),
        (colorNeutral2 = "#1A1A1A"),
        (colorPrimary = "#0193EC"),
      ],
    },
  },
  plugins: [],
};
