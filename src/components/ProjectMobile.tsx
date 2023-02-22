import { TProject } from "../types";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import useTechnologies from "@/hooks/useTechnologies";
import { useMemo } from "react";

const ProjectMobile = ({
  title,
  description,
  technologies,
  repo,
  image,
  url,
}: TProject) => {
  const allTechnologies = useTechnologies();
  const projectTechnologies = useMemo(
    () => allTechnologies.filter((tech) => technologies.includes(tech.name)),
    [technologies]
  );
  return (
    <div className="lg:hidden section-hidden transition-all duration-1000">
      <img
        src={image}
        alt={`Screenshot of ${title} web page`}
        className="aspect-[1895/900] mb-8"
        loading="lazy"
      />
      <div className="p-4 md:p-10">
        <div className="flex flex-col gap-3 text-2xl leading-relaxed font-color-dark dark:text-[#f8f9fb]">
          <h3 className="font-color-blue uppercase font-semibold text-3xl">
            {title}
          </h3>
          <p className="mb-6">{description}</p>
          <footer className="flex flex-col gap-8">
            <div className="flex gap-4">
              {projectTechnologies.map(({ name, url }) => (
                <img
                  key={name}
                  className={`w-12 aspect-square ${
                    name === "Express" ? "dark:brightness-[500]" : ""
                  }`}
                  src={url}
                  alt={`${name} logo`}
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
    </div>
  );
};

export default ProjectMobile;
