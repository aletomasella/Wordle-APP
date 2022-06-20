/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0)",
            background: "#fff",
            borderColor: "#333",
          },
          "45%": {
            transform: "rotateX(90deg)",
            background: "#fff",
            borderColor: "#333",
          },
          "55%": {
            transform: "rotateX(90deg)",
            background: "green",
            borderColor: "#333",
          },
          "100%": {
            transform: "rotateX(0)",
            background: "green",
            borderColor: "#333",
          },
        },
      },
      animation: {
        flip: "flip 0.5 ease forwards",
      },
    },
  },
  plugins: [],
};
