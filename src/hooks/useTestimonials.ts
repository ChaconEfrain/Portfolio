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
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677092362/Portfolio/Testimonials/euge_nwtick.jpg",
      linkedIn: "https://www.linkedin.com/in/maria-eugenia-bonforte/",
      gitHub: "https://github.com/eub1",
    },
    {
      name: "Franco Nicoletti",
      testimonial: t("francoTestimonial"),
      position: "Full stack web developer",
      company: "Freelance",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677092362/Portfolio/Testimonials/franco_ipymyd.jpg",
      linkedIn: "https://www.linkedin.com/in/franconicoletti/",
      gitHub: "https://github.com/Nico0f",
    },
    {
      name: "Francisco Hernández",
      testimonial: t("franciscoTestimonial"),
      position: "Full stack web developer",
      company: "Freelance",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677092362/Portfolio/Testimonials/francisco_wziwik.jpg",
      linkedIn: "https://www.linkedin.com/in/francisco-hernandez-24881792/",
      gitHub: "https://github.com/FranSabt",
    },
    {
      name: "Isaías Gómez",
      testimonial: t("isaiasTestimonial"),
      position: "Henry mentor",
      company: "Henry",
      image:
        "https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677092362/Portfolio/Testimonials/isaias_iz9eac.jpg",
      linkedIn: "https://www.linkedin.com/in/isa%C3%ADas-g%C3%B3mez-dev027/",
      gitHub: "https://github.com/Isaiasgomz",
    },
  ];

  return { t, testimonials };
};

export default useTestimonials;
