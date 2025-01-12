import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import { projects } from "./projectsInfo";
import { renderFooter } from "./renderFooter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Projects() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const isWideViewport = window.innerWidth >= 1600;

  const handleMouseDown = (e) => {
    if (isWideViewport) return;
    const container = containerRef.current;
    setIsDragging(true);
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (isWideViewport) return;
    const container = containerRef.current;
    if (!isDragging) return;
    const x = e.pageX - container.offsetLeft;
    const scroll = x - container.startX;
    container.scrollLeft = container.scrollLeftStart - scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScrollX = () => {
    if (isWideViewport) return;
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, offsetWidth } = container;
      const atStart = scrollLeft === 0;
      const atEnd = scrollLeft + offsetWidth >= scrollWidth;
      setShowLeftArrow(!atStart);
      setShowRightArrow(!atEnd);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollX);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollX);
      }
    };
  }, []);

  return (
    <section id="projects" className="flex justify-center bg-dark px-24">
      <div className="w-11/12">
        <h1 className="text-center my-24">PROJECTS</h1>
        <div className="relative">
          <div className={`relative flex gap-5 my-24 cursor-grab overflow-x-auto select-none  ${isDragging ? "cursor-grabbing" : "cursor-grab"}  ${isWideViewport && "justify-center cursor-auto"}`} ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ scrollbarWidth: "none" }}>
            {projects.map((project, index) => {
              return (
                <article key={index} className="flex justify-center">
                  <Card title={project.title} description={project.description} imagePath={project.imagePath} footer={renderFooter(project)} />
                </article>
              );
            })}
          </div>
          {!isWideViewport && showLeftArrow && <FaChevronLeft className="absolute pointer-events-none left-0 top-1/2 -translate-y-1/2  drop-shadow-lg" size={80} color="white" />}
          {!isWideViewport && showRightArrow && <FaChevronRight className="absolute pointer-events-none right-0 top-1/2 -translate-y-1/2  drop-shadow-lg" size={80} color="white" />}
        </div>
      </div>
    </section>
  );
}

export default Projects;
