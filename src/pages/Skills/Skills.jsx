import { backendAndDBSkills, frontendSkills, toolsSkills } from "./skillsData";
import SkillsSection from "./SkillsSection/SkillsSection";

//background from:#010905 to #072f17 diagonal to left

function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-bl from-[#010905] to-[#072f17] py-8 md:py-24 flex justify-center">
      <div className="w-11/12">
        <h1>SKILLS</h1>
        <SkillsSection skills={frontendSkills} title="Frontend" />
        <SkillsSection skills={backendAndDBSkills} title="Backend" />
        <SkillsSection skills={toolsSkills} title="Tools" />
      </div>
    </section>
  );
}

export default Skills;
