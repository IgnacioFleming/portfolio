import { Tooltip } from "@mui/material";

function SkillsSection({ skills, title }) {
  return (
    <>
      <article className="flex flex-col items-center justify-center m-5 md:m-12">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center">
          <h2 className="my-5 w-2/6">{title.toUpperCase()}</h2>
          <div className="flex flex-wrap sm:flex-nowrap gap-5 items-center my-5 md:my-0 md:h-40 2xl:mx-40">
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <Tooltip title={skill.name}>
                    <img src={skill.path} alt={`Logo de ${skill.name}`} className="md:my-0 md:w-14" />
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
