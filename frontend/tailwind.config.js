/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkestPurple: "#07020c",
      darkPurple: "#130522",
      mediumPurple: "#8545C9",
      lightPurple: "#8B56FF",
      lightSepiaPurple: "#46355A",
      sepiaPurple: "#362946",
      veryDarkGrey: "#6C757D",
      darkGrey: "#776d79",
      lightGrey: "#EDEDF5",
      ghostWhite: "EDEDF5",
      white: "#ffffff",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      fontLavenderGray: "#DBDBE9",
      fontLightGray: "#C0C0D6",
      fontCoolGray: "#A7A7C8",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      lightPurple: "#8B56FF",
    }),
    backgroundSize: {
      110: "110%",
      100: "100%",
    },
    extend: {
      backgroundImage: {
        bgMain: "url('./assets/backgrounds/landing-bckgrd-img.jpeg')",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hide: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
