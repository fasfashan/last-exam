/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-2%)" },
          "50%": { transform: "translateY(0)" },
        },
      },

      colors: {
        primary: "#0A2540",
        secondary: "#3A3A4C",
        backblue: "#FAFCFF",
        primarybg: "#635BFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
