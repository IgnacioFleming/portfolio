import { useEffect, useRef, useState } from "react";

export const useSmoothFollow = (timer) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        ref.current.animate(
          {
            left: `${e.pageX}px`,
            top: `${e.pageY}px`,
          },
          { duration: timer, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return ref;
};
