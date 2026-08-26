import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.scss";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <main className={"page-transition" + (visible ? " page-transition--visible" : "")}>
      {children}
    </main>
  );
};

export default PageTransition;
