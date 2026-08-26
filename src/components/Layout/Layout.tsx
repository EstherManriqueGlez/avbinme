import { Outlet } from "react-router-dom";
import NavBar from "../MainNav/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import PageTransition from "../PageTransition/PageTransition";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Layout;
