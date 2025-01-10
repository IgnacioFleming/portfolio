import { useRef } from "react";
import { useSmoothFollow } from "../../hooks/useSmoothFollow";

function CursorBubble() {
  const { isHovered, ref } = useSmoothFollow();

  return <div ref={ref} className={` border-solid rounded-full absolute -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-200 ease-in-out ${isHovered ? "w-28 h-28 border-4 border-white" : "w-12 h-12 border-2 border-primary"}`}></div>;
}

export default CursorBubble;
