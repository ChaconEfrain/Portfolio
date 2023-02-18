import { useTranslation } from "next-i18next";
import { ImLocation } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdContactPage } from "react-icons/md";
import {
  BsBriefcaseFill,
  BsFillPersonFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { GiThorHammer } from "react-icons/gi";
import { FaDog, FaWineGlass } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { t } = useTranslation("home");

  return (
    <footer className="font-color-dark dark:text-[#f8f9fb] bg-[#e6ecf3] dark:bg-[#333] py-8 text-2xl overflow-hidden">
      <div className="max-w-[120rem] grid gap-y-8 lg:gap-0 justify-items-center lg:grid-cols-5 md:grid-cols-2 grid-cols-2 m-auto sm:p-0 p-6">
        <div className="self-center col-start-1 col-end-[-1] lg:col-span-1">
          <p className="font-medium ">
            &copy; {currentYear}, {t("copyRightNotice")}
          </p>
        </div>
        <div>
          <address className="not-italic flex flex-col gap-6">
            <p className="font-medium">{t("contactInformation")}</p>
            <ul className="[&>li>p]:flex [&>li>a]:flex [&>li>p]:gap-3 [&>li>a]:gap-3 flex flex-col gap-4 text-xl">
              <li>
                <p>
                  <span className="font-color-blue dark:text-[#777]">
                    <ImLocation className="aspect-square w-8 h-8" />
                  </span>{" "}
                  <span>Mérida, Yucatán, México</span>
                </p>
              </li>
              <li>
                <a href="mailto:efrachaga@gmail.com">
                  <span className="font-color-blue dark:text-[#777]">
                    <MdEmail className="aspect-square w-8 h-8" />
                  </span>{" "}
                  <p>efrachaga@gmail.com</p>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+529999943965"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-color-blue dark:text-[#777]">
                    <IoLogoWhatsapp className="aspect-square w-8 h-8" />
                  </span>{" "}
                  <p>+52 999 994 3965</p>
                </a>
              </li>
              <li>
                <a
                  href="./EfrainChacon_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-color-blue dark:text-[#777]">
                    <MdContactPage className="aspect-square w-8 h-8" />
                  </span>{" "}
                  <p>{t("previewMyCV")}</p>
                </a>
              </li>
              <li>
                <a
                  href="./EfrainChacon_CoverLetter.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-color-blue dark:text-[#777]">
                    <BsFillPersonFill className="aspect-square w-8 h-8" />
                  </span>{" "}
                  <p>{t("previewMyCoverLetter")}</p>
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-medium">{t("certificates")}</p>
          <ul className="[&>li>a]:flex [&>li>a]:gap-3 flex flex-col gap-4 text-xl">
            <li>
              <a
                href="https://certificates.soyhenry.com/cert?id=779a73c2-4a68-40f9-8cec-89cc4b570856"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <HiCodeBracketSquare className="aspect-square w-8 h-8" />
                </span>
                <p>Full stack developer</p>
              </a>
            </li>
            <li>
              <a
                href="./EfrainChacon_EF_SET.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <BiWorld className="aspect-square w-8 h-8" />
                </span>
                <p>EF SET</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-medium">{t("social")}</p>
          <ul className="[&>li>a]:flex [&>li>a]:gap-3 flex flex-col gap-4 text-xl">
            <li>
              <a
                href="https://github.com/ChaconEfrain"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <BsGithub className="w-8 h-8" />
                </span>
                <p>GitHub</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <BsLinkedin className="w-8 h-8" />
                </span>
                <p>LinkedIn</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-medium">{t("projects")}</p>
          <ul className="[&>li>a]:flex [&>li>a]:gap-3 flex flex-col gap-4 text-xl">
            <li>
              <a
                href="https://voluble-hummingbird-3fb9b1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <FaWineGlass className="w-8 h-8" />
                </span>
                <p>Wine Supply</p>
              </a>
            </li>
            <li>
              <a
                href="https://melodic-biscochitos-98c4cb.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <FaDog className="w-8 h-8" />
                </span>
                <p>Dog App</p>
              </a>
            </li>
            <li>
              <a
                href="https://marvel-app-green-two.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <GiThorHammer className="w-8 h-8" />
                </span>
                <p>Marvel App</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChaconEfrain/Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-color-blue dark:text-[#777]">
                  <BsBriefcaseFill className="w-8 h-8" />
                </span>
                <p>Portfolio repo</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
