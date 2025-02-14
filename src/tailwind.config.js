/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#F8E8D0",
          softTeal: "#6ABEA7",
          goldenYellow: "#F4C542",
          deepBrown: "#5A3E2B",
        },
      },
    },
    plugins: [],
  };