import { useEffect } from "react";

export const useRipple = () => {
  useEffect(() => {
    const button = document.getElementById("btn");

    const makeRipple = (e) => {
      const existingRipple = document.getElementById("ripple");
      if (existingRipple) return;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.id = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.className = "absolute bg-blue-500 opacity-50 rounded-full animate-ripple";
      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };
    button.addEventListener("click", makeRipple);
    return () => button.removeEventListener("click", makeRipple);
  }, []);
};
