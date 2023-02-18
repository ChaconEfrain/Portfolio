import { useState } from "react";
import { useTranslation } from "next-i18next";
import useTheme from "../hooks/useTheme";
import { ImSun } from "react-icons/im";
import { FiMoon } from "react-icons/fi";
import BurgerButton from "./BurgerButton";
import Toggle from "./Toggle";

const Nav = () => {
  const { t } = useTranslation("home");
  const { darkMode, setDarkMode } = useTheme();
  const sections = [t("technologies"), t("projects"), t("testimonials")];

  const [activeSection, setActiveSection] = useState({
    [t("technologies")]: false,
    [t("projects")]: false,
    [t("testimonials")]: false,
  });

  const navigatePage = (e: React.BaseSyntheticEvent) => {
    const sectionTechnologies = document.getElementById("section-technologies");
    const sectionProjects = document.getElementById("section-projects");
    const sectionTestimonials = document.getElementById("section-testimonials");
    switch (e.target.innerHTML) {
      case t("technologies"):
        sectionTechnologies?.scrollIntoView({
          behavior: "smooth",
        });
        setActiveSection({
          [t("technologies")]: true,
          [t("projects")]: false,
          [t("testimonials")]: false,
        });
        break;

      case t("projects"):
        sectionProjects?.scrollIntoView({
          behavior: "smooth",
        });
        setActiveSection({
          [t("technologies")]: false,
          [t("projects")]: true,
          [t("testimonials")]: false,
        });
        break;

      case t("testimonials"):
        sectionTestimonials?.scrollIntoView({
          behavior: "smooth",
        });
        setActiveSection({
          [t("technologies")]: false,
          [t("projects")]: false,
          [t("testimonials")]: true,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div
      id="nav-bar"
      onClick={navigatePage}
      className="flex justify-between items-center py-5 md:px-12 px-12 nav z-10"
    >
      <img
        src="/images/coding_brackets.png"
        alt="Coding brackets"
        className="sm:w-40 w-28 aspect-[183/137]"
      />
      <nav className="flex md:gap-4 lg:gap-8 items-center">
        <ul className="md:flex hidden gap-8 text-3xl font-color-dark dark:text-[#f8f9fb]">
          {sections.map((section) => (
            <li
              className={`cursor-pointer ${
                activeSection[section] ? "item-highlight" : ""
              }  py-2 px-6 rounded-full font-semibold`}
              key={section}
            >
              {section}
            </li>
          ))}
        </ul>
        <div className="md:flex hidden items-center">
          <Toggle />
        </div>
        <div
          onClick={() => setDarkMode!((prevState) => !prevState)}
          className="text-4xl font-color-dark dark:text-[#f8f9fb] cursor-pointer hidden md:block"
        >
          {darkMode ? <ImSun /> : <FiMoon />}
        </div>
        <img
          src="/images/myPhoto.jpg"
          alt="Efraín Chacón"
          className="w-28 rounded-full hidden md:flex aspect-square"
        />
      </nav>
      <BurgerButton />
    </div>
  );
};

export default Nav;
