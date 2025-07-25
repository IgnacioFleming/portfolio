import { useTranslation } from "react-i18next";
import { backendAndDBSkills, frontendSkills, toolsSkills } from "./skillsData";
import SkillsSection from "./SkillsSection/SkillsSection";
import { Container } from "../../components/Container/Container";

function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="bg-gradient-to-bl from-[#010905] to-[#072f17] py-24  flex justify-center">
      <Container>
        <h1 className="uppercase">{t("content.skills.title")}</h1>
        <SkillsSection skills={frontendSkills} title={t("content.skills.sections.frontend")} />
        <SkillsSection skills={backendAndDBSkills} title={t("content.skills.sections.backend")} />
        <SkillsSection skills={toolsSkills} title={t("content.skills.sections.tools")} />
      </Container>
    </section>
  );
}

export default Skills;
