import { useEffect, useState } from "react";

export const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const computedStyle = window.getComputedStyle(e.target);
      if (computedStyle.cursor === "pointer") {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);
    // requestAnimationFrame(handleMouseMove);
    return () => {
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);
  return isHovered;
};
