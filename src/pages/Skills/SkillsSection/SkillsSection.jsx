import { Tooltip } from "@mui/material";

function SkillsSection({ skills, title }) {
  return (
    <>
      <article className="flex flex-col items-center justify-center m-12">
        <div className="w-full flex items-center">
          <h2 className="my-2 w-2/6">{title.toUpperCase()}</h2>
          <div className="flex gap-10 items-center h-40 2xl:mx-40">
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <Tooltip title={skill.name}>
                    <img src={skill.path} alt={`Logo de ${skill.name}`} className="w-14" />
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
