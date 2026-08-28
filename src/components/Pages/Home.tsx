
import { Link } from "react-router-dom";

import { AvaluosBienesInmuebles } from '../AvaluosBienesInmuebles/AvaluosBienesInmuebles';
import { HeroSlogan } from "../HeroSlogan/HeroSlogan";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./Home.scss";

export const Home = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <>
      <HeroSlogan /> 
      
      {/* Sección de Introducción de Autoridad y Servicios */}
      <section className="home-intro-banner">
        <div className="container container--narrow">
          <div
            ref={introRef}
            className={"intro-content scroll-reveal" + (introVisible ? " scroll-reveal--visible" : "")}
          >
            <span className="badge-luxury">Excelencia Pericial y Valuación</span>
            <h2>Rigurosidad Técnica y Validez Jurídica</h2>
            <p>Brindamos dictámenes periciales certificados con los más altos estándares normativos para corporativos, instituciones y particulares en todo México.</p>
          </div>
        </div>
      </section>

      <AvaluosBienesInmuebles />
      
      {/* Sección de Conversión de Alto Impacto (Menos de 90 segundos) */}
      <section className="conversion-cta-section">
        <div className="container container--medium">
          <div
            ref={ctaRef}
            className={"cta-card scroll-reveal" + (ctaVisible ? " scroll-reveal--visible" : "")}
          >
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

