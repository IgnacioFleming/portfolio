import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import { projects } from "./projectsInfo";
import { renderFooter } from "./renderFooter";

function Projects() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const isWideViewport = window.innerWidth >= 1600;

  const handleMouseDown = (e) => {
    if (isWideViewport) return;
    const container = containerRef.current;
    setIsDragging(true);
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
    console.log(container.className);
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
  return (
    <section id="projects" className="flex justify-center bg-dark px-24">
      <div className="w-11/12">
        <h1 className="text-center my-24">PROJECTS</h1>
        <div className={`flex gap-5 my-24 cursor-grab overflow-x-auto select-none  ${isDragging ? "cursor-grabbing" : "cursor-grab"}  ${isWideViewport && "justify-center cursor-auto"}`} ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          {projects.map((project, index) => {
            return (
              <article key={index} className="flex justify-center">
                <Card title={project.title} description={project.description} imagePath={project.imagePath} footer={renderFooter(project)} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
