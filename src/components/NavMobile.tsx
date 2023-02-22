import { useState } from "react";
import { useTranslation } from "next-i18next";
import useNavMobile from "../hooks/useNavMobile";
import useTheme from "../hooks/useTheme";
import { AiOutlineClose } from "react-icons/ai";
import Toggle from "./Toggle";
import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";

const NavMobile = () => {
  const { t } = useTranslation("home");
  const { openNav, setOpenNav } = useNavMobile();
  const { darkMode, setDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState({
    [t("technologies")]: false,
    [t("projects")]: false,
    [t("testimonials")]: false,
  });

  const sections = [t("technologies"), t("projects"), t("testimonials")];

  const navigatePage = (e: React.BaseSyntheticEvent) => {
    const sectionTechnologies = document.getElementById("section-technologies");
    const sectionProjects = document.getElementById("section-projects");
    const sectionTestimonials = document.getElementById("section-testimonials");
    switch (e.target.innerHTML) {
      case t("technologies"):
        sectionTechnologies?.scrollIntoView({ behavior: "smooth" });
        setActiveSection({
          [t("technologies")]: true,
          [t("projects")]: false,
          [t("testimonials")]: false,
        });
        break;

      case t("projects"):
        sectionProjects?.scrollIntoView({ behavior: "smooth" });
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
    <>
      <nav
        onClick={navigatePage}
        className="md:hidden flex flex-col gap-8 fixed bg-[#e6ecf3] dark:bg-[#333] right-0 top-0 bottom-0 w-1/2 p-10 z-30 translate-x-full transition-all duration-300"
        style={{
          transform: `${openNav ? "translateX(0)" : "translateX(100%)"}`,
        }}
      >
        <div className="flex justify-between">
          <button
            onClick={() => setOpenNav!(false)}
            className="font-color-dark dark:text-[#f8f9fb] text-3xl"
          >
            <AiOutlineClose />
          </button>
          <div
            onClick={() => setDarkMode!((prevState) => !prevState)}
            className="text-3xl font-color-dark dark:text-[#f8f9fb] cursor-pointer"
          >
            {darkMode ? <ImSun /> : <FiMoon />}
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1677089199/Portfolio/myPhoto_tcteoi.jpg"
          alt="Efraín Chacón"
          className="w-28 rounded-full self-center aspect-square"
        />
        <ul className="flex flex-col items-start gap-8 text-3xl font-color-dark dark:text-[#f8f9fb] font-semibold">
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer ${
                activeSection[section] ? "item-highlight" : ""
              } py-2 px-6 rounded-full font-semibold`}
            >
              {section}
            </li>
          ))}
        </ul>
        <div className="flex items-center self-center font-color-dark font-semibold">
          <Toggle />
        </div>
      </nav>
      <div
        onClick={() => setOpenNav!(false)}
        className="md:hidden block fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-20 translate-x-full transition-all duration-300"
        style={{
          transform: `${openNav ? "translateX(0)" : "translateX(100%)"}`,
        }}
      />
    </>
  );
};

export default NavMobile;
