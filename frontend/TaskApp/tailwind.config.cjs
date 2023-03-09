/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        user: "url('./images/user.jpg')",
        wave: "url('./images/wave-haikei.png')",
        gradient: "url('./images/blurry-gradient-haikei.png')",
      },
    },
  },
  plugins: [],
};
