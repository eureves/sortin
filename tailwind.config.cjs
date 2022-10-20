/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F8FFF4",
        main: "#FCFFEB",
        dark: "#474350",
        yellow: "#FAFAC6",
        red: "#FECDAA",
      },
    },
  },
  plugins: [],
};
