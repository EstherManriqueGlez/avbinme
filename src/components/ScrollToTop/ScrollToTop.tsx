import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
          window.scrollTo({ top, behavior });
          return;
        }
        window.scrollTo(0, 0);
      }, 100);
      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

