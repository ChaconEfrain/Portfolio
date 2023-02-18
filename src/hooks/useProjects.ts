import { useTranslation } from "next-i18next";
import { TProject } from "../types";

const useProjects = () => {
  const { t } = useTranslation("home");

  const projects: TProject[] = [
    {
      title: "Wine supply",
      description: t("wineSupplyDescription"),
      technologies: ["typescript", "redux", "react", "node"],
      repo: "https://github.com/Wine-Supply/wine-supply-front",
      image: "/images/projects/wineSupply.jpg",
      url: "https://voluble-hummingbird-3fb9b1.netlify.app/",
    },
    {
      title: "Dog app",
      description: t("dogAppDescription"),
      technologies: [
        "javascript",
        "redux",
        "react",
        "express",
        "postgresql",
        "node",
      ],
      repo: "https://github.com/ChaconEfrain/Dogs-API",
      image: "/images/projects/dogApp.jpg",
      url: "https://melodic-biscochitos-98c4cb.netlify.app/",
    },
    {
      title: "Marvel app",
      description: t("marvelAppDescription"),
      technologies: ["javascript", "redux", "react"],
      repo: "https://github.com/ChaconEfrain/marvel-app",
      image: "/images/projects/marvelApp.jpg",
      url: "https://marvel-app-green-two.vercel.app/",
    },
  ];

  return { t, projects };
};

export default useProjects;
