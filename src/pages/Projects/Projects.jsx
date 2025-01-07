import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { icons } from "../../helpers/icons";
import { projects } from "./projectsInfo";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const renderFooter = (project) => {
    return (
      <footer className="flex flex-col gap-2 justify-end">
        <div className="flex justify-between">
          <div className="flex gap-1">
            {project.stack.map((tech, index) => {
              return (
                <div className="p-1" key={index}>
                  <img src={icons[tech]} alt={tech} title={tech} className="w-8 h-8" />
                </div>
              );
            })}
          </div>
          <Button label="Website" className="text-white h-10 w-24 shadow-overWhite" icon={<FaExternalLinkAlt />} iconPosition="right" />
        </div>
      </footer>
    );
  };
  return (
    <section className="flex justify-center">
      <div className="w-3/4">
        <h2 className="text-center">Projects</h2>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] gap-5 place-content-center">
          {projects.map((project, index) => {
            return (
              <article key={index} className="flex justify-center">
                <Card title={project.title} description={project.description} imagePath={project.imagePath} footer={renderFooter(project)} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
