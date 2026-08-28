
import { Link } from 'react-router-dom';
import logoNegativo from '@/assets/images/Logo_Negativo.svg';
import logo from '@/assets/images/logo.png';
import { CONTACT_INFO } from '@/utils/constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col brand-col">
              <Link to="/">
                <img src={logoNegativo} alt="Logotipo AVBINME" loading="lazy" decoding="async" />
              </Link>
              <p className="footer-tagline">
                Servicios profesionales en valuación inmobiliaria, maquinaria y
                equipo, activos intangibles y peritajes judiciales. Contamos con
                más de 30 años de experiencia.
              </p>
            </div>

            <div className="footer-col links-col">
              <h4>Navegación</h4>
              <ul aria-label="Navegación del pie de página">
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
                {CONTACT_INFO.phones.map((phone, i) => (
                  <span key={phone.href}>
                    {i > 0 && " / "}
                    <a href={phone.href}>{phone.number}</a>
                  </span>
                ))}
              </p>
              <p>
                <a href={CONTACT_INFO.email.href}>{CONTACT_INFO.email.address}</a>
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
              rel="noopener noreferrer"
            >
              Desarrollado por:
              <img src={logo} alt="Manrique logo" className="logo-img" loading="lazy" decoding="async" />
              Esther Manrique González
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

