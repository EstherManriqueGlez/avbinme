import Footer from "./components/Footer/Footer.js";
import NavBar from "./components/MainNav/NavBar.js";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Pages/Home.js";
import We from "./components/Pages/We.js";
import Contact from "./components/Pages/Contact.js";
import Services from "./components/Pages/Services.js";
import Certifications from "./components/Pages/Certifications.js";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <HashRouter history={browserHistory}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={We} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/servicios" component={Services} />
        <Route exact path="/certificaciones" component={Certifications} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
