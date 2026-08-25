import { Outlet } from "react-router-dom";
import NavBar from "../MainNav/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
