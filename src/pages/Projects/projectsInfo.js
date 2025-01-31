const root = "content.projects.cards";
export const projects = [
  {
    title: `${root}.business-manager.title`,
    description: `${root}.business-manager.description`,
    imagePath: "/images/business-manager.png",
    frontEndRepositoryPath: "https://github.com/IgnacioFleming/management-system-frontend",
    backEndRepositoryPath: "https://github.com/IgnacioFleming/backoffice-backend",
    deploy: "https://management-system-frontend-five.vercel.app",
    stack: ["reactJS", "primereact", "expressJS", "nodeJS", "mySQL"],
  },
  {
    title: `${root}.the-office-store.title`,
    description: `${root}.the-office-store.description`,
    imagePath: "/images/the-office-store.png",
    frontEndRepositoryPath: "https://github.com/IgnacioFleming/webapp_ecommerce_frontend",
    backEndRepositoryPath: "https://github.com/IgnacioFleming/app-ecommerce-backend",
    deploy: "https://webapp-ecommerce-frontend.vercel.app",
    stack: ["reactJS", "materialUI", "expressJS", "nodeJS", "mongoDB"],
  },
  {
    title: `${root}.vizcacha-wines.title`,
    description: `${root}.vizcacha-wines.description`,
    imagePath: "/images/vizcacha-wines.png",
    frontEndRepositoryPath: "https://github.com/IgnacioFleming/vizcacha-wines",
    deploy: "https://vizcacha-wines.vercel.app",
    stack: ["reactJS", "materialUI", "firebase"],
  },
  {
    title: `${root}.serminca.title`,
    description: `${root}.serminca.description`,
    imagePath: "/images/serminca.png",
    frontEndRepositoryPath: "https://github.com/IgnacioFleming/Serminca",
    deploy: "https://serminca.vercel.app",
    stack: ["reactJS", "materialUI", "firebase"],
  },
];
