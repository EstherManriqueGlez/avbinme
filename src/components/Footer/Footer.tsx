import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logoNegativo from '@/assets/images/Logo_Negativo.svg';
import logo from '@/assets/images/logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col brand-col">
              <Link to="/">
                <img src={logoNegativo} alt="Logotipo AVBINME" />
              </Link>
              <p className="footer-tagline">
                Servicios profesionales en valuación inmobiliaria, maquinaria y
                equipo, activos intangibles y peritajes judiciales. Contamos con
                más de 30 años de experiencia.
              </p>
            </div>

            <div className="footer-col links-col">
              <h4>Navegación</h4>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link to="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link to="/certificaciones">Certificaciones</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col contact-col">
              <h4>Contacto Directo</h4>
              <p>
                <a href="tel:5529551257">55 2955 1257</a> /{' '}
                <a href="tel:5555889578">55 5588 9578</a>
              </p>
              <p>
                <a href="mailto:aaaaa@avbinme.com.mx">aaaaa@avbinme.com.mx</a>
              </p>
              <div className="footer-badge">
                Peritos Valuadores Certificados
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} AVBINME. Todos los derechos
              reservados.
            </p>

            <a
              href="https://esthermanrique.github.io/Portafolio_Esther_Manrique_2021/#/"
              target="_blank"
            >
              Desarrollado por:
              <img src={logo} alt="Manrique logo" className="logo-img" />
              Esther Manrique González
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
