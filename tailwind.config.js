/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        PinkButton: { 500: "#EA2C6D", 800: "#da185c" },
        MailCyan: { 500: "#00BCD4", 800: "#00a7bd" },
      },
      animation: { spin90: "spin 1s ease-in-out" },
      keyframes: {
        spin90: {
          "0% , 100%": { tranform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
  important: true,
  darkMode: "class",
};
