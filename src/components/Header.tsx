import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Container from "./Container";
import Nav from "./Nav";

const Header = () => {
  const { t } = useTranslation("home");

  useEffect(() => {
    const headerText = document.querySelector(".hidden-text");
    headerText?.classList.remove("hidden-text");
  }, []);

  return (
    <header
      id="main-section"
      className="h-full pb-16 lg:pb-0 lg:h-screen flex flex-col bg-[#e6ecf3] dark:bg-gradient-to-r dark:from-[#444] dark:to-[#222] transition-all duration-300"
    >
      <Nav />
      <Container
        display="grid"
        cols="grid-cols-1 lg:grid-cols-2"
        gap="gap-10 sm:gap-20"
      >
        <div className="sm:text-4xl text-2xl flex flex-col gap-20 items-center self-center font-color-dark dark:text-[#f8f9fb] md:px-12 lg:px-0 hidden-text transition-all duration-1000">
          <div className="flex flex-col gap-6">
            <header className="flex flex-col gap-4">
              <p className="uppercase font-color-dark dark:text-[#f8f9fb]  text-3xl font-semibold tracking-wide">
                {t("aboutMeTitle")}
              </p>
              <h1 className="self-start font-bold sm:text-8xl text-6xl tracking-tight text-[#023e8a] dark:text-[#4f60df]">
                Full stack developer
              </h1>
            </header>
            <p className="leading-relaxed">{t("aboutMe")}</p>
          </div>
          <div className="flex items-center gap-10">
            <a
              className="inline-block bg-dark font-color-light font-medium px-8 py-4 rounded-full hover:bg-[#023d8adc] transition-all duration-300"
              href="mailto:efrachaga@gmail.com"
              download
            >
              {t("contactMe")} &rarr;
            </a>
            <a
              className="inline-block hover:shadow-[inset_0_0_0_2px_#023e8a] dark:hover:shadow-[inset_0_0_0_2px_#f8f9fb] hover:text-[#023e8a] transition-all duration-300 px-8 py-4 rounded-full bg-[#f8f9fb] dark:hover:bg-transparent font-color-dark dark:hover:text-[#f8f9fb] font-medium"
              href="./EfrainChacon_CV.pdf"
              download
            >
              {t("downloadCV")}
            </a>
          </div>
        </div>
        <img
          className="row-start-1 lg:col-start-2 md:w-3/4 lg:w-full aspect-[559/447]"
          src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677089199/Portfolio/mainPhoto_smj2g6.png"
          alt="Person sitting on a desk with his laptop and programming-related images floating around"
        />
      </Container>
    </header>
  );
};

export default Header;
