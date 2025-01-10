import { useEffect, useState } from "react";

export const useShowFixedNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (window.scrollY > 500) setShowNavbar(true);
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  return showNavbar;
};
