import { useRef } from "react";
import Card from "../../components/Card/Card";
import { projects } from "./projectsInfo";
import { renderFooter } from "./renderFooter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useJustifyOverflownContent } from "../../hooks/useJustifyOverflownContent";
import { useHandleDragging } from "../../hooks/useHandleDragging";
import { useTranslation } from "react-i18next";

function Projects() {
  const containerRef = useRef(null);
  const isWideViewport = window.innerWidth >= 1600;
  const isNarrowViewport = window.innerWidth < 640;
  const justifyContent = useJustifyOverflownContent("justify-center", containerRef);
  const { showLeftArrow, showRightArrow, handleArrowClick, handleMouseDown, handleMouseUp, handleMouseMove, showDragScroll } = useHandleDragging(containerRef, isWideViewport);
  const { t } = useTranslation();

  return (
    <section id="projects" className="flex justify-center bg-dark py-24 sm:px-24">
      <div className="w-full lg:w-11/12">
        <h1 className="text-center">{t("content.projects.title")}</h1>
        <div className="relative">
          <div className={`relative flex ${justifyContent} flex-wrap sm:flex-nowrap gap-5 my-24 overflow-x-auto select-none  ${showDragScroll()}  ${isWideViewport && "justify-center cursor-auto"}`} ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ scrollbarWidth: "none" }}>
            {projects.map((project, index) => {
              return (
                <article key={index} className="flex justify-center">
                  <Card title={t(project.title)} description={t(project.description)} imagePath={project.imagePath} footer={renderFooter(project)} />
                </article>
              );
            })}
          </div>
          {!isWideViewport && !isNarrowViewport && showLeftArrow && <FaChevronLeft onClick={() => handleArrowClick("left")} className="absolute left-0 top-1/2 -translate-y-1/2 drop-shadow-lg cursor-pointer" size={80} color="white" />}
          {!isWideViewport && !isNarrowViewport && showRightArrow && <FaChevronRight onClick={handleArrowClick} className="absolute  right-0 top-1/2 -translate-y-1/2  drop-shadow-lg cursor-pointer" size={80} color="white" />}
        </div>
      </div>
    </section>
  );
}

export default Projects;
