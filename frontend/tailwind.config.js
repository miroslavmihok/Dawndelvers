/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkestPurple: "#07020c",
      darkPurple: "#1C1124",
      mediumPurple: "#52316A",
      lightPurple: "#6D418D",
      lightSepiaPurple: "#46355A",
      sepiaPurple: "#362946",
      lightLemonGreen: "#9BD161",
      sepiaRed: "#FD3247",
      lemonGreen: "#89C945",
      veryDarkGrey: "#6C757D",
      darkGrey: "#776d79",
      lightGrey: "#EDEDF5",
      white: "#ffffff",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      fontLavenderGray: "#DBDBE9",
      fontLightGray: "#C0C0D6",
      sepiaGray: "#676B8B",
      fontCoolGray: "#A7A7C8",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      lightPurple: "#6D418D",
    }),
    backgroundSize: {
      110: "110%",
      100: "100%",
    },
    screens: {
      xs: "578px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
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
