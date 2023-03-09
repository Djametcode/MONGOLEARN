/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        user: "url('.TaskApp//src/images/user.jpg')",
        wave: "url('./TaskApp/src/images/wave-haikei.png')",
      },
    },
  },
  plugins: [],
};
