import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

if (typeof window !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const scrollToTop = () => {
  const doScroll = () =>
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

  requestAnimationFrame(() => {
    requestAnimationFrame(doScroll);
  });
};

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
          window.scrollTo({ top, behavior: "auto" });
          return;
        }
        scrollToTop();
      }, 100);
      return () => clearTimeout(timer);
    }

    scrollToTop();
  }, [pathname, hash]);

  return null;
};

