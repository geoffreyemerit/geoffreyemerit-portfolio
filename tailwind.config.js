module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  darkMode: "class" /*'media'*/,
  theme: {
    extend: {
      fontFamily: {
        lexend: "'Lexend Deca', 'sans-serif'",
        raleway: "'Raleway', 'sans-serif'",
        pat: "'Patrick Hand', 'cursive'",
      },
      keyframes: {
        modalSlideIn: {
          "0%": { transform: "translate(0px, -70px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
      animation: {
        modalSlideIn: "modalSlideIn 0.2s ease-out",
      },
      colors: {
        primary: "#0A0B0A",
        secondary: "#FFF",
        tertiary: "#FBC706",
      },
    },
  },
};
