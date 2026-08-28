import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.scss";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    setVisible(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={"page-transition" + (visible ? " page-transition--visible" : "")}
    >
      {children}
    </main>
  );
};

