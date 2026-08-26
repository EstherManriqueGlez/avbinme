import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoAvbime from "@/assets/images/Logo_Web_Positivo.svg";
import "./NavBar.scss";

const NAV_ITEMS = [
  { to: "/", label: "INICIO" },
  { to: "/nosotros", label: "NOSOTROS" },
  { to: "/servicios", label: "SERVICIOS" },
  { to: "/certificaciones", label: "CERTIFICACIONES" },
  { to: "/contacto", label: "CONTACTO" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "active hvr-underline-from-center" : "hvr-underline-from-center";
  };

  return (
    <>
      <header className={"header" + (scrolled ? " header--scrolled" : "")}>
        <div className="logo">
          <Link to="/">
            <img
              src={logoAvbime}
              alt="Logotipo AvBIME"
            />
          </Link>
        </div>

        <div className="hide-on-med-and-up burger-icon">
          <button
            type="button"
            className={"nav-burger" + (menuOpen ? " open" : "")}
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={menuOpen}
            aria-controls="js-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <nav className={"menu" + (menuOpen ? " is-active" : "")}>
          <ul className="menu-nav" id="js-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={getNavLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
