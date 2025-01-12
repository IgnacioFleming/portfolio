import { useSmoothFollow } from "../../hooks/useSmoothFollow";
import { useIsHovered } from "../../hooks/useIsHovered";

function CursorBubble() {
  const smallBubbleRef = useSmoothFollow(500);
  const bigBubbleRef = useSmoothFollow(2000);

  const isHovered = useIsHovered();

  return (
    <>
      <div ref={smallBubbleRef} className={` border-solid rounded-full absolute -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-200 ease-in-out border-white ${isHovered ? "w-28 h-28 border-4" : "w-4 h-4 border-2"}`}></div>
      <div ref={bigBubbleRef} className={` border-solid rounded-full absolute -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-200 ease-in-out border-white ${isHovered ? "hidden" : "w-12 h-12 border-2"}`}></div>
    </>
  );
}

export default CursorBubble;
