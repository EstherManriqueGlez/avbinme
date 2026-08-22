import Footer from "./components/Footer/Footer";
import NavBar from "./components/MainNav/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import We from "./components/Pages/We";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Certifications from "./components/Pages/Certifications";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<We />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/certificaciones" element={<Certifications />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
