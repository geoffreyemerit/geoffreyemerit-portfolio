const portfolioArray = [
  {
    id: 0,
    title: "Jason et la toison d'or",
    intro: "Projet personnel: Création de mon premier site web en autodidacte.",
    date: "Février 2022",
    images: [
      "./assets/portfolio/jason1.png",
      "./assets/portfolio/jason2.png",
      "./assets/portfolio/jason3.png",
    ],
    desc: "Voici le premier projet de ma vie. Un site web sur le thème de Jason et la toison d'or. Ce site m'a permis de faire mes premiers pas dans le web developpement en autodidacte et d'intégrer la Wild Code School.",
    techs: ["./assets/portfolio/html.png", "./assets/portfolio/css.png"],
    link: "https://codesandbox.io/s/techchallenge-web-dev-starter-forked-xl717?file=/style.css",
    color: "#E67140",
  },
  {
    id: 1,
    title: "Shifumi",
    intro:
      "Premier projet: Création d'un site web du jeu Pierre, Feuille, Ciseaux.",
    date: "Mars 2022",
    images: [
      "./assets/portfolio/shifumi1.png",
      "./assets/portfolio/shifumi2.png",
      "./assets/portfolio/shifumi3.png",
    ],
    desc: "Le premier projet au sein de la formation. Pour une durée de 4 semaines, notre équipe de 4 étudiants a développé le site web fictif du célèbre jeu pierre, feuille, ciseaux.",
    techs: [
      "./assets/portfolio/html.png",
      "./assets/portfolio/sass.png",
      "./assets/portfolio/js.png",
    ],
    link: "https://nicolasvagnoux.github.io/Project1_Shifumi/",
    color: "#E6B455",
  },
  {
    id: 2,
    title: "Star Tour",
    intro:
      "Deuxième projet: Création du site web d'une agence de voyage fictive.",
    date: "Avril 2022",
    images: [
      "./assets/portfolio/st1.png",
      "./assets/portfolio/st2.png",
      "./assets/portfolio/st3.png",
    ],
    desc: "Deuxième projet, cette fois ci d'une durée de 5 semaines. L'équipe, constituée de 5 étudiants, a développé le site web d'une agence de voyage fictive autour de la saga Star Wars.",
    techs: ["./assets/portfolio/react.png", "./assets/portfolio/tailwind.png"],
    link: "https://star-tour-agency.vercel.app/",
    color: "#FCD642",
  },
  {
    id: 3,
    title: "Sauve Qui Peut",
    intro:
      "Projet réalisé dans le cadre d'un Hackathon de 36h sur le thème de l'écologie.",
    date: "Mai 2022",
    images: [
      "./assets/portfolio/sqp1.png",
      "./assets/portfolio/sqp2.png",
      "./assets/portfolio/sqp3.png",
    ],
    desc: "Premier hackathon de 36h autour d'un thème ... l'écologie. Nous étions 4 étudiants pour développer Sauve Qui Peut, site web fictif de NFT au profit d'associations qui protègent notre planète. (Format desktop uniquement).",
    techs: ["./assets/portfolio/react.png", "./assets/portfolio/tailwind.png"],
    link: "https://sauvequipeut.vercel.app/",
    color: "#A7D570",
  },
  {
    id: 4,
    title: "Hackathon 2 (à venir)",
    intro: "Projet réalisé dans le cadre du deuxième Hackathon de 50h",
    date: "Juin 2022",
    images: ["./assets/portfolio/mystere.jpeg"],
    desc: "Deuxième hackathon à venir la dernière semaine de juin.",
    techs: [
      "./assets/portfolio/react.png",
      "./assets/portfolio/sass.png",
      "./assets/portfolio/ts.png",
      "./assets/portfolio/node.png",
      "./assets/portfolio/mysql.png",
    ],
    link: "",
    color: "#53D57B",
  },
  {
    id: 5,
    title: "Club Sandwich (en cours)",
    intro:
      "Troisième projet: Création du site web d'un restaurant à Biarritz (64).",
    date: "Juin / Juillet 2022",
    images: ["./assets/portfolio/cs.png"],
    desc: "Troisième projet d'une durée de 8 semaines. Une équipe de 4 étudiants qui développe le site web d'un restaurant qui a ouvert ses portes récemment sur Biarrtz (64). Site en construction, lien disponible prochainement.",
    techs: [
      "./assets/portfolio/react.png",
      "./assets/portfolio/sass.png",
      "./assets/portfolio/ts.png",
      "./assets/portfolio/node.png",
      "./assets/portfolio/mysql.png",
    ],
    link: "",
    color: "#4BCFCD",
  },
];

export default portfolioArray;
