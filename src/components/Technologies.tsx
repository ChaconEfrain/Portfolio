import { useTranslation } from "next-i18next";
import Container from "./Container";

const technologies = [
  "typescript",
  "javascript",
  "react",
  "redux",
  "tailwind",
  "express",
  "node",
  "postgresql",
];

const Technologies = () => {
  const { t } = useTranslation("home");

  return (
    <section
      id="section-technologies"
      className="section-hidden transition-all duration-1000 pt-40"
    >
      <Container
        cols="grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8"
        gap="gap-8"
        display="grid"
      >
        <header className="flex flex-col gap-4 col-span-full justify-self-start mb-8">
          <p className="uppercase font-color-dark dark:text-[#f8f9fb] text-3xl font-semibold tracking-wide">
            {t("technologies")}
          </p>
          <h2 className="section-title">{t("needSomeone")}</h2>
        </header>
        {technologies.map((tech) => (
          <img
            key={tech}
            className={`aspect-square ${
              tech === "express" ? "dark:brightness-[500]" : ""
            }`}
            src={`./${tech}.svg`}
            alt={tech}
            loading="lazy"
          />
        ))}
      </Container>
    </section>
  );
};

export default Technologies;
