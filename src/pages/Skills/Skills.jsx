import { backendAndDBSkills, frontendSkills, toolsSkills } from "./skillsData";
import SkillsSection from "./SkillsSection/SkillsSection";

//background from:#010905 to #072f17 diagonal to left

function Skills() {
  return (
    <section className="bg-gradient-to-bl from-[#010905] to-[#072f17] py-24">
      <h2 className="text-center">Skills</h2>
      <SkillsSection skills={frontendSkills} title="Frontend" />
      <SkillsSection skills={backendAndDBSkills} title="Backend and Database" />
      <SkillsSection skills={toolsSkills} title="Extra Tools" />
    </section>
  );
}

export default Skills;
