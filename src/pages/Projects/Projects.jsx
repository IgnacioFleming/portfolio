import Card from "../../components/Card/Card";
import { projects } from "./projectsInfo";
import { renderFooter } from "./renderFooter";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
import { useRef, useState } from "react";
import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    cyan: {
      main: "#80f0ff",
    },
  },
});

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const scrollBackRef = useRef(null);

  const scrollBackToProjects = () => {
    const yOffset = 1200;
    const y = scrollBackRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  const toggleShowAll = () => {
    if (showAll) {
      setIsHiding(true);
      if (scrollBackRef.current) scrollBackToProjects();
      setTimeout(() => {
        setShowAll(false);
        setIsHiding(false);
      }, 450);
    } else {
      setShowAll(true);
    }
  };
  const { t } = useTranslation();

  return (
    <section id="projects" className="flex justify-center bg-dark py-24 2xl:px-24">
      <div className="w-full lg:w-11/12">
        <h1 className="text-center uppercase">{t("content.projects.title")}</h1>
        <div className="relative">
          <div ref={scrollBackRef} className={`relative  w-full ${styles.projectGrid} ${showAll ? "show-all" : ""} ${isHiding ? "hide-anim" : ""} gap-y-24 my-24  select-none projects-container`} style={{ scrollbarWidth: "none" }}>
            {projects.map((project, index) => {
              return (
                <article key={index} className={`flex justify-center card-container ${showAll}`}>
                  <Card title={t(project.title)} description={t(project.description)} imagePath={project.imagePath} footer={renderFooter(project)} />
                </article>
              );
            })}
          </div>
          <div className="flex justify-center sm:hidden -my-20">
            <ThemeProvider theme={theme}>
              <Button onClick={toggleShowAll} variant="outlined" color="cyan">
                {showAll ? "Show less" : "Show more"}
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
