/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
        "4xl": "2320px",
        "5xl": "2620px",
        "6xl": "3220px",
      },
    },
  },
  plugins: [],
};
