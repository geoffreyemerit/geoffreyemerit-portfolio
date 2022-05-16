module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      backgroundImage: {
        landingPage: "url('./assets/backgrounds/0-bg-landingPage.jpg')",
        homeBlack: "url('./assets/backgrounds/bg-home-black.png')",
        homeWhite: "url('./assets/backgrounds/bg-home-white.png')",
        aboutMeBlack: "url('./assets/backgrounds/bg-aboutme-black.png')",
        aboutMeWhite: "url('./assets/backgrounds/bg-abouteme-white.png')",
        skillsBlack: "url('./assets/backgrounds/bg-skills-black.png')",
        skillsWhite: "url('./assets/backgrounds/bg-skills-white.png')",
        portfolioBlack: "url('./assets/backgrounds/bg-portfolio-black.jpg')",
        portfolioWhite: "url('./assets/backgrounds/bg-portfolio-white.png')",
        contactBlack: "url('./assets/backgrounds/bg-contact-black.png')",
        contactWhite: "url('./assets/backgrounds/bg-contact-white.png')",
      },
      colors: {
        ylw: "#FBC74B",
        blck: "#171717",
        wht: "#E8E8E8",
      },
    },
  },
};
