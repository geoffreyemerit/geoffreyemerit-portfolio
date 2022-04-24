module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/images/bg-home.png')",
        aboutme: "url('./assets/images/bg-aboutme.png')",
        skills: "url('./assets/images/bg-skills.png')",
        portfolio: "url('./assets/images/bg-portfolio.png')",
        contact: "url('./assets/images/bg-contact.png')",
      },
      colors: {
        ylw: "#FBC74B",
        blck: "#171717",
        wht: "#E8E8E8",
      },
    },
  },
};
