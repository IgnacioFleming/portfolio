import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { stackIcons } from "../../helpers/stackIcons";
import { projects } from "./projectsInfo";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const renderFooter = (project) => {
    return (
      <footer className="flex justify-between items-center">
        <div className="flex gap-1 ">
          {project.stack.map((tech, index) => {
            return (
              <div className="p-1">
                <img key={index} src={stackIcons[tech]} alt={tech} title={tech} className="w-10 h-10" />
              </div>
            );
          })}
        </div>
        <Button label="Website" className="text-white h-10 w-24" icon={<FaExternalLinkAlt />} iconPosition="right" />
      </footer>
    );
  };
  return (
    <section>
      <h2 className="text-center">Projects</h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-5 place-content-center">
        {projects.map((project, index) => {
          return (
            <article key={index} className="flex justify-center">
              <Card title={project.title} description={project.description} imagePath={project.imagePath} footer={renderFooter(project)} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
