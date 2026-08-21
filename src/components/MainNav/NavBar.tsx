import React, { Fragment, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";


const menuToggle = () => {
  const $btnMenu = document.querySelector(".nav-burger"),
    $menu = document.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.classList.toggle("open");
    $menu.classList.toggle("is-active");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $menu.classList.remove("is-active");
    $btnMenu.classList.remove("open");
  });
};


const NavBar = () => {
  useEffect(() => {
    menuToggle();
  }, []);

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
            <div className="nav-burger" data-alloy-navbar-target="#js-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        <nav className="menu">
          <ul className="menu-nav" id="js-menu">
            <li>
              <NavLink
                exact
                to="/"
                className="hvr-underline-from-center"
                activeClassName="active"
              >
                INICIO
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/nosotros"
                className="hvr-underline-from-center"
              >
                NOSOTROS
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/servicios"
                className="hvr-underline-from-center"
              >
                SERVICIOS
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/certificaciones"
                className="hvr-underline-from-center"
              >
                CERTIFICACIONES
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contacto"
                className="hvr-underline-from-center"
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
