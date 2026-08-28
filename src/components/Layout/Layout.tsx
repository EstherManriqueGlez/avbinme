import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "../MainNav/NavBar";
import { Footer } from "../Footer/Footer";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";
import { PageTransition } from "../PageTransition/PageTransition";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Link to="#main-content" className="visually-hidden">
        Saltar al contenido principal
      </Link>
      <NavBar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
};

