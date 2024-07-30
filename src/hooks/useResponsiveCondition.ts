import { useEffect, useState, useRef } from "react";

function useResponsiveCondition(breakpoint: number, throttleInterval = 300) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleWidthOnResize = () => {
    setCurrentWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleThrottledResize = () => {
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          handleWidthOnResize();
        }, throttleInterval);
      }
    };

    setCurrentWidth(window.innerWidth);

    window.addEventListener("resize", handleThrottledResize);

    return () => {
      window.removeEventListener("resize", handleThrottledResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [throttleInterval]);

  return currentWidth >= breakpoint;
}

export default useResponsiveCondition;
