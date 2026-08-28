import { Suspense, lazy } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { RouteFallback } from "./components/RouteFallback/RouteFallback";

const Home = lazy(() =>
  import("./components/Pages/Home").then((m) => ({ default: m.Home }))
);
const We = lazy(() =>
  import("./components/Pages/We").then((m) => ({ default: m.We }))
);
const Contact = lazy(() =>
  import("./components/Pages/Contact").then((m) => ({ default: m.Contact }))
);
const Services = lazy(() =>
  import("./components/Pages/Services").then((m) => ({ default: m.Services }))
);
const Certifications = lazy(() =>
  import("./components/Pages/Certifications").then((m) => ({
    default: m.Certifications,
  }))
);

export const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<We />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/certificaciones" element={<Certifications />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

