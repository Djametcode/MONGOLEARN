/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        user: "url('./images/user.jpg')",
        wave: "url('./images/wave-haikei.png')",
      },
    },
  },
  plugins: [],
};
