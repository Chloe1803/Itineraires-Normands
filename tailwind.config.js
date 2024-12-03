/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darkYellow: "var(--darkYellow)",
        lightYellow: "var(--lightYellow)",
        otherYellow: "var(--otherYellow)",
        darkBlue: "var(--darkBlue)",
        lightBlue: "var(--lightBlue)",
        greyishBlue: "var(--greyishBlue)",
        brown: "var(--brown)",
      },
    },
  },
  plugins: [],
};
