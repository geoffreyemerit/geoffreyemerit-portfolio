module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  darkMode: "'media','class'",
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', 'sans-serif'",
        raleway: "'Raleway', 'sans-serif'",
        starjedi: "Starjedi",
        galactic: "Galactic Basic",
      },
      backgroundImage: {
        landingBlack: "url('./assets/backgrounds/bg-landing-black.jpeg')",
        landingWhite: "url('./assets/backgrounds/bg-landing-white.jpeg')",
        homeBlack: "url('./assets/backgrounds/bg-home-black.png')",
        homeWhite: "url('./assets/backgrounds/bg-home-white.png')",
        aboutMeBlack: "url('./assets/backgrounds/bg-aboutme-black.jpg')",
        aboutMeWhite: "url('./assets/backgrounds/bg-aboutme-white.jpeg')",
        skillsBlack: "url('./assets/backgrounds/bg-skills-black.jpg')",
        skillsWhite: "url('./assets/backgrounds/bg-skills-white.jpeg')",
        portfolioBlack: "url('./assets/backgrounds/bg-portfolio-black.jpg')",
        portfolioWhite: "url('./assets/backgrounds/bg-portfolio-white.jpeg')",
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
