
import { Link } from "react-router-dom";

import AvaluosBienesInmuebles from '../AvaluosBienesInmuebles/AvaluosBienesInmuebles';
import HeroSlogan from "../HeroSlogan/HeroSlogan";
import MainSubtitle from "../MainSubtitle/MainSubtitle";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <HeroSlogan /> 
      
      {/* Sección de Introducción de Autoridad y Servicios */}
      <section className="home-intro-banner">
        <div className="container">
          <div className="intro-content">
            <span className="badge-luxury">Excelencia Pericial y Valuación</span>
            <h2>Rigurosidad Técnica y Validez Jurídica</h2>
            <p>Brindamos dictámenes periciales certificados con los más altos estándares normativos para corporativos, instituciones y particulares en todo México.</p>
          </div>
        </div>
      </section>

      <AvaluosBienesInmuebles />
      
      {/* Sección de Conversión de Alto Impacto (Menos de 90 segundos) */}
      <section className="conversion-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-badge">Atención Inmediata</div>
            <h2>¿Requiere un Avalúo con Validez Legal y Rigor Técnico?</h2>
            <p>Nuestros peritos valuadores certificados ofrecen dictámenes precisos y profesionales para empresas, notarías e instituciones.</p>
            <div className="cta-actions">
              <Link to="/contacto" className="btn-primary-gold">Solicitar Cotización Inmediata</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
