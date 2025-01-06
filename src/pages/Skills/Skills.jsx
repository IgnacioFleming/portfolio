import { backendAndDBSkills, frontendSkills, toolsSkills } from "./skillsData";
import SkillsSection from "./SkillsSection/SkillsSection";

function Skills() {
  return (
    <section>
      <h2 className="text-center">Skills</h2>

      <SkillsSection skills={frontendSkills} title="Frontend" />
      <SkillsSection skills={backendAndDBSkills} title="Backend and Database" />
      <SkillsSection skills={toolsSkills} title="Extra Tools" />
    </section>
  );
}

export default Skills;
