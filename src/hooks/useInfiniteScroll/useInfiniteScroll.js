import { useRef, useEffect } from "react";
import { hooks } from "@modules";

export const useInfiniteScroll = (speed = 1, breakpoint = 768) => {
  const { useScreenSize } = hooks;
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const { width: screenWidth } = useScreenSize();

  const scrollContent = () => {
    if (containerRef.current && screenWidth >= breakpoint) {
      containerRef.current.scrollLeft += speed;

      if (
        containerRef.current.scrollLeft >=
        containerRef.current.scrollWidth / 2
      ) {
        containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 2;
      }

      animationFrameRef.current = requestAnimationFrame(scrollContent);
    }
  };

  useEffect(() => {
    if (screenWidth >= breakpoint) {
      animationFrameRef.current = requestAnimationFrame(scrollContent);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [screenWidth, speed, breakpoint]);

  return { containerRef };
};
