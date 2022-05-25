module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  darkMode: "class" /*'media'*/,
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', 'sans-serif'",
        raleway: "'Raleway', 'sans-serif'",
      },
      backgroundImage: {
        landingBlack: "url('./assets/backgrounds/bg-landing-black.jpeg')",
        landingWhite: "url('./assets/backgrounds/bg-landing-white.jpeg')",
        homeBlack: "url('./assets/backgrounds/bg-home-black.png')",
        homeWhite: "url('./assets/backgrounds/bg-home-white.png')",
        aboutMeBlack: "url('./assets/backgrounds/bg-aboutme-black.jpg')",
        aboutMeWhite: "url('./assets/backgrounds/bg-aboutme-white.jpg')",
        skillsBlack: "url('./assets/backgrounds/bg-skills-black.jpg')",
        skillsWhite: "url('./assets/backgrounds/bg-skills-white.jpg')",
        portfolioBlack: "url('./assets/backgrounds/bg-portfolio-black.jpg')",
        portfolioWhite: "url('./assets/backgrounds/bg-portfolio-white.jpg')",
        contactBlack: "url('./assets/backgrounds/bg-contact-black.jpg')",
        contactWhite: "url('./assets/backgrounds/bg-contact-white.jpeg')",
      },
      colors: {
        primary: "#0A0B0A",
        secondary: "#FFF",
        tertiary: "#FBC74B",
      },
    },
  },
};
