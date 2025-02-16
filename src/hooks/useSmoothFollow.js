import { useEffect, useRef } from "react";

export const useSmoothFollow = (timer) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        ref.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
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
