import { useEffect, useRef, useState } from "react";

export const useSmoothFollow = () => {
  const ref = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        ref.current.animate(
          {
            left: `${e.pageX}px`,
            top: `${e.pageY}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };

    const handleMouseEnter = (e) => {
      const computedStyle = window.getComputedStyle(e.target);
      if (computedStyle.cursor === "pointer") {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);
    // requestAnimationFrame(handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);
  return { isHovered, ref };
};
