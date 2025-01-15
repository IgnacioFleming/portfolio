import { useEffect, useState } from "react";

export const useHandleDragging = (ref, isWideViewport = false) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleMouseDown = (e) => {
    if (isWideViewport) return;
    const container = ref.current;
    setIsDragging(true);
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (isWideViewport) return;
    const container = ref.current;
    if (!isDragging) return;
    const x = e.pageX - container.offsetLeft;
    const scroll = x - container.startX;
    container.scrollLeft = container.scrollLeftStart - scroll;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleArrowClick = (direction = "right") => {
    const container = ref.current;
    const { scrollLeft, scrollWidth } = container;
    const scrollAmount = scrollWidth - scrollLeft;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const showDragScroll = () => {
    if (isWideViewport) return;
    if (isDragging) return "cursor-grabbing";
    return "cursor-grab";
  };

  const handleScrollX = () => {
    if (isWideViewport) return;
    const container = ref.current;
    if (container) {
      const { scrollLeft, scrollWidth, offsetWidth } = container;
      const atStart = scrollLeft === 0;
      const atEnd = scrollLeft + offsetWidth >= scrollWidth - 5;
      setShowLeftArrow(!atStart);
      setShowRightArrow(!atEnd);
    }
  };
  useEffect(() => {
    const container = ref.current;
    if (container) {
      container.addEventListener("scroll", handleScrollX);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScrollX);
      }
    };
  }, []);
  return { showLeftArrow, showRightArrow, handleArrowClick, handleMouseDown, handleMouseUp, handleMouseMove, showDragScroll };
};
