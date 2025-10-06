// src/hooks.jsx
import { useEffect, useState, useRef } from "react";

/* =========================================================================
   Hook: direction du scroll (desktop uniquement)
============================================================================ */
export function useScrollDirectionDesktop() {
  const [dir, setDir] = useState("up");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 768) return; // Ignore sur mobile
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current && y > 12;
      setDir(goingDown ? "down" : "up");
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return dir;
}
