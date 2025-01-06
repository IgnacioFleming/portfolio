function SkillsSection({ skills, title }) {
  return (
    <>
      <article className="flex flex-col items-center justify-center m-12">
        <h3 className="text-center">{title}</h3>
        <div className="border-2 border-solid rounded-lg border-slate-500 flex justify-center w-5/6 bg-white text-black shadow-elevated">
          <div className="flex justify-around items-center w-full h-40 ">
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <label className="flex flex-col items-center justify-center">
                    <div>
                      <img src={skill.path} alt={`Logo de ${skill.name}`} />
                    </div>
                    {skill.name}
                  </label>
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
