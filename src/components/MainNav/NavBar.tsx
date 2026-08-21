import React, { Fragment, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";


const menuToggle = () => {
  const $btnMenu = document.querySelector(".nav-burger"),
    $menu = document.querySelector(".menu");

  if (!$btnMenu || !$menu) return;

  $btnMenu.addEventListener("click", (e) => {
    const isOpen = $btnMenu.classList.toggle("open");
    $menu.classList.toggle("is-active");
    $btnMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!e.target || !(e.target as HTMLElement).matches(".menu a")) return false;
    $menu.classList.remove("is-active");
    $btnMenu.classList.remove("open");
    $btnMenu.setAttribute("aria-expanded", "false");
  });
};


const NavBar = () => {
  useEffect(() => {
    menuToggle();
  }, []);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "active hvr-underline-from-center" : "hvr-underline-from-center";
  };

  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img
              src={
                "/assets/images/Logo_Web_Positivo.svg"
              }
              alt="Logotipo AvBIME"
            />
          </Link>
        </div>

        <div className="hide-on-med-and-up burger-icon">
            <button 
              type="button" 
              className="nav-burger" 
              data-alloy-navbar-target="#js-menu" 
              aria-label="Abrir menú de navegación"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        <nav className="menu">
          <ul className="menu-nav" id="js-menu">
            <li>
              <NavLink
                to="/"
                className={getNavLinkClass}
              >
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={getNavLinkClass}
              >
                NOSOTROS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={getNavLinkClass}
              >
                SERVICIOS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certificaciones"
                className={getNavLinkClass}
              >
                CERTIFICACIONES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={getNavLinkClass}
              >
                CONTACTO
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
