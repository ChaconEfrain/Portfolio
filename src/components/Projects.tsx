import useProjects from "../hooks/useProjects";
import Container from "./Container";
import Project from "./Project";
import ProjectMobile from "./ProjectMobile";

const Projects = () => {
  const { t, projects } = useProjects();

  return (
    <section
      id="section-projects"
      className="section-hidden transition-all duration-1000 pt-40"
    >
      <Container cols="grid-cols-1" gap="gap-20" display="grid">
        <header className="flex flex-col gap-4 col-span-full justify-self-start">
          <p className="uppercase font-color-dark dark:text-[#f8f9fb] text-3xl font-semibold tracking-wide">
            {t("projects")}
          </p>
          <h2 className="section-title">{t("seeMyProjects")}</h2>
        </header>
        {projects.map((project, i) => (
          <article
            key={project.url}
            className="shadow-md shad rounded-2xl lg:rounded-none overflow-hidden"
          >
            <Project
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repo={project.repo}
              image={project.image}
              url={project.url}
              rowReverse={i % 2 !== 0 ? true : false}
            />
            <ProjectMobile
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repo={project.repo}
              image={project.image}
              url={project.url}
            />
          </article>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
