/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orangee: "#f4741f",
        gold: "#FFD700",
      },
      backgroundImage: {
        funnel1: "url('/src/assets/4.jpeg')",
        funnel2Banner: "url('/src/assets/funnel2-banner-bg.jpg')",
      },
    },
  },
  plugins: [],
};
