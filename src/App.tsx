import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/MainNav/NavBar.js";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Pages/Home.js";
import We from "./components/Pages/We.js";
import Contact from "./components/Pages/Contact.js";
import Services from "./components/Pages/Services.js";
import Certifications from "./components/Pages/Certifications.js";

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
