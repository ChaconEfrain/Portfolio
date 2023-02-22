import { useTranslation } from "next-i18next";
import { TProject } from "../types";

const useProjects = () => {
  const { t } = useTranslation("home");

  const projects: TProject[] = [
    {
      title: "Wine supply",
      description: t("wineSupplyDescription"),
      technologies: ["Typescript", "Redux", "React.js", "Node.js"],
      repo: "https://github.com/Wine-Supply/wine-supply-front",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677091305/Portfolio/Projects/wineSupply_pigrsx.jpg",
      url: "https://voluble-hummingbird-3fb9b1.netlify.app/",
    },
    {
      title: "Dog app",
      description: t("dogAppDescription"),
      technologies: [
        "Javascript",
        "Redux",
        "React.js",
        "Express",
        "PostgreSQL",
        "Node.js",
      ],
      repo: "https://github.com/ChaconEfrain/Dogs-API",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677091305/Portfolio/Projects/dogApp_hbs60m.jpg",
      url: "https://melodic-biscochitos-98c4cb.netlify.app/",
    },
    {
      title: "Marvel app",
      description: t("marvelAppDescription"),
      technologies: ["Javascript", "Redux", "React.js"],
      repo: "https://github.com/ChaconEfrain/marvel-app",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/v1677091305/Portfolio/Projects/marvelApp_vygrar.jpg",
      url: "https://marvel-app-green-two.vercel.app/",
    },
  ];

  return { t, projects };
};

export default useProjects;
