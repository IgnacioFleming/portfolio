import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Button from "../../components/Button/Button";
import { icons } from "../../helpers/icons";

export const renderFooter = (project) => {
  return (
    <footer className="flex flex-col gap-1 justify-end">
      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-2">
          {project.stack.map((tech, index) => {
            return (
              <div key={index}>
                <img src={icons[tech]} alt={tech} title={tech} className="w-8 h-8" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-full items-center h-12">
          <a href={project.deploy} target="_blank" className="flex items-center">
            <Button label="DEPLOY" className="text-primary hover:text-black font-semibold border-none h-10 w-auto shadow-overWhite bg-dark" icon={<FaExternalLinkAlt />} iconPosition="right" />
          </a>
          <div className="flex flex-col gap-1">
            <a href={project.frontEndRepositoryPath} target="_blank" className="flex gap-1 align-start text-sm">
              <FaCode size={18} />
              FrontEnd
            </a>
            {project.backEndRepositoryPath && (
              <a href={project.backEndRepositoryPath} target="_blank" className="flex gap-1 align-start text-sm">
                <FaCode size={18} />
                BackEnd
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
