import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { TProject } from "../types";
import Container from "./Container";

const Project = ({
  title,
  description,
  technologies,
  repo,
  image,
  url,
  rowReverse,
}: TProject) => {
  return (
    <Container
      display="hidden lg:grid"
      cols="grid-cols-2"
      gap="gap-20"
      extra="section-hidden transition-all duration-1000"
    >
      <div className={`${rowReverse ? "col-start-2 col-end-2" : ""}`}>
        <div className="flex flex-col gap-10 text-3xl leading-relaxed font-color-dark dark:text-[#f8f9fb] p-8">
          <div className="flex flex-col gap-4">
            <h3 className="uppercase font-semibold text-4xl font-color-blue">
              {title}
            </h3>
            <p>{description}</p>
          </div>
          <footer className="flex flex-col gap-8">
            <div className="flex gap-4">
              {technologies.map((tech) => (
                <img
                  key={tech}
                  className={`w-16 aspect-square ${
                    tech === "express" ? "dark:brightness-[500]" : ""
                  }`}
                  src={`./${tech}.svg`}
                  alt={`${tech} logo`}
                  loading="lazy"
                />
              ))}
            </div>
            <div>
              <a
                className="flex items-center gap-4 pb-1 transition-all duration-300 font-color-dark dark:text-[#f8f9fb] border-b-2 border-transparent hover:border-current"
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="w-8 h-8 " /> Visit GitHub repository
              </a>
              <a
                className="flex items-center gap-4 pb-1 transition-all duration-300 font-color-dark dark:text-[#f8f9fb] border-b-2 border-transparent hover:border-current"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <TbWorld className="w-8 h-8 " /> Visit app
              </a>
            </div>
          </footer>
        </div>
      </div>
      <img
        src={image}
        alt={`Screenshot of ${title} web page`}
        className={`${
          rowReverse ? "col-start-1 col-end-1 row-start-1" : ""
        } aspect-[1895/900]`}
        loading="lazy"
      />
    </Container>
  );
};

export default Project;
