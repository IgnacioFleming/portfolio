import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../../components/Button/Button";
import { icons } from "../../helpers/icons";

export const renderFooter = (project) => {
  return (
    <footer className="flex flex-col gap-2 justify-end">
      <div className="flex flex-col items-start gap-3">
        <div className="flex gap-2">
          {project.stack.map((tech, index) => {
            return (
              <div key={index}>
                <img src={icons[tech]} alt={tech} title={tech} className="w-8 h-8" />
              </div>
            );
          })}
        </div>
        <a href={project.deploy} target="_blank">
          <Button label="WEBSITE" className="text-primary hover:text-black font-semibold border-none h-10 w-auto shadow-overWhite bg-dark" icon={<FaExternalLinkAlt />} iconPosition="right" />
        </a>
      </div>
    </footer>
  );
};
