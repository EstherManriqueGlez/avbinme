import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Pages/Home";
import { We } from "./components/Pages/We";
import { Contact } from "./components/Pages/Contact";
import { Services } from "./components/Pages/Services";
import { Certifications } from "./components/Pages/Certifications";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<We />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/certificaciones" element={<Certifications />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

