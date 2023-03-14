/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
        comic: ["Comic Neue", "cursive"],
      },
      backgroundImage: {
        user: "url('./images/user.png')",
        wave: "url('./images/wave-haikei.png')",
        gradient: "url('./images/blurry-gradient-haikei.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
