import { useTranslation } from "next-i18next";
import { TTestimonial } from "../types";

const useTestimonials = () => {
  const { t } = useTranslation("home");

  const testimonials: TTestimonial[] = [
    {
      name: "Eugenia Bonforte",
      testimonial: t("eugeTestimonial"),
      position: "Full stack web developer",
      company: "Freelance",
      image: "/images/testimonials/euge.jpg",
      linkedIn: "https://www.linkedin.com/in/maria-eugenia-bonforte/",
      gitHub: "https://github.com/eub1",
    },
    {
      name: "Franco Nicoletti",
      testimonial: t("francoTestimonial"),
      position: "Full stack web developer",
      company: "Freelance",
      image: "/images/testimonials/franco.jpg",
      linkedIn: "https://www.linkedin.com/in/franconicoletti/",
      gitHub: "https://github.com/Nico0f",
    },
    {
      name: "Francisco Hernández",
      testimonial: t("franciscoTestimonial"),
      position: "Full stack web developer",
      company: "Freelance",
      image: "/images/testimonials/francisco.jpg",
      linkedIn: "https://www.linkedin.com/in/francisco-hernandez-24881792/",
      gitHub: "https://github.com/FranSabt",
    },
    {
      name: "Isaías Gómez",
      testimonial: t("isaiasTestimonial"),
      position: "Henry mentor",
      company: "Henry",
      image: "/images/testimonials/isaias.jpg",
      linkedIn: "https://www.linkedin.com/in/isa%C3%ADas-g%C3%B3mez-dev027/",
      gitHub: "https://github.com/Isaiasgomz",
    },
  ];

  return { t, testimonials };
};

export default useTestimonials;
