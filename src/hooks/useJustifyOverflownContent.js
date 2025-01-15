import { useEffect, useState } from "react";

export const useJustifyOverflownContent = (initial, ref) => {
  const [justifyContent, setJustifyContent] = useState(initial);

  useEffect(() => {
    const handleJustify = () => {
      const container = ref.current;
      if (container) {
        const { offsetWidth, scrollWidth } = container;

        if (scrollWidth <= offsetWidth) {
          setJustifyContent("justify-center");
        } else {
          setJustifyContent("justify-start");
        }
      }
    };

    handleJustify();
    window.addEventListener("resize", handleJustify);
    return () => window.removeEventListener("resize", handleJustify);
  }, []);

  return justifyContent;
};
