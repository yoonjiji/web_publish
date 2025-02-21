/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(220, 220, 220)",
        black: "#000000",
        white: "#ffffff",
        gray: "#f7f7f7",
        name: "#333333",
        bg: "#f0ece1",
        pink: "#fecad6",
        green: "#21a664",
        blue: "#2c5dab",
        red: "#f15b41",
        yellow: "#f6e163",
      },
    },
  },
  plugins: [],
};
