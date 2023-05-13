/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        avatar: "url('/image/user.png')",
        heikei: "url('/bg.svg')",
        heikei2: "url('/bg2.svg')",
      },
    },
  },
  plugins: [],
};
