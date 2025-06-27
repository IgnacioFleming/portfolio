import { Tooltip } from "@mui/material";

function SkillsSection({ skills, title }) {
  return (
    <>
      <article className="flex flex-col items-center justify-center m-5 my-12 md:m-12">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <h2 className="my-5 lg:w-[350px]  shrink-0">{title}</h2>
          <div className="flex flex-wrap gap-5 items-center my-5 md:my-0 md:h-40">
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <Tooltip title={skill.name}>
                    <img src={skill.path} alt={`Logo de ${skill.name}`} className="md:my-0 w-14" />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}

export default SkillsSection;
