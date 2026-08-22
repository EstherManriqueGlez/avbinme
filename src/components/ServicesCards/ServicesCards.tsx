import React, { Fragment } from "react";
import "./ServicesCards.scss";

interface ServicesCardsProps {
  onOpenService: (id: string) => void;
}

const ServicesCards = ({ onOpenService }: ServicesCardsProps) => {
  return (
    <Fragment>
      <section className="cards-services">
        <div className="container">
          <div className="cards-wrapper">
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/inmuebles.jpg"}
                  alt="Imagen de Inmuebles"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Inmuebles</h2>
                <p className="card-paragraph">
                  ¿Quieres saber el valor de cualquier tipo de inmueble?
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("inmuebles")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/maquinaria_equipo.jpg"}
                  alt="Imagen de Maquinaria y Equipo"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Maquinaria y Equipo</h2>
                <p className="card-paragraph">
                  !La importancia de conocer el valor de tus activos para la toma de decisiones¡
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("maquinaria-y-equipo")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/opinion_valor.jpg"}
                  alt="Imagen de Opinión de Valor"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Avalúos Judiciales</h2>
                <p className="card-paragraph">
                  ¿Requieres de un Avalúo para una Controversia Judicial?
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("avaluo-judicial")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/justipreciación_rentas.jpg"}
                  alt="Imagen de Justipreciación de Rentas"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Justipreciación de Rentas</h2>
                <p className="card-paragraph">
                  ¿Quieres saber cuál es el monto más apropiado para arrendamiento de un Bien Inmueble?
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("justipreciacion-de-rentas")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/avaluo_maestro.jpg"
                  }
                  alt="Imagen de Avalúo Maestro"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Avalúo Maestro</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("avaluo-maestro")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div> */}
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/regimen_propiedad_condominio.jpg"}
                  alt="Imagen de Régimen de Propiedad en Condominio"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">
                  Régimen de Propiedad en Condominio
                </h2>
                <p className="card-paragraph">
                  !Dale certeza Jurídica a tú propiedad¡
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("regimen-de-propiedad-en-condominio")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/negocios_en_marcha.jpg"}
                  alt="Imagen de Negocios en Marcha"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Negocios en Marcha</h2>
                <p className="card-paragraph">
                  ¿Necesitas saber cuál es el valor de tu negocio?
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("negocios-en-marcha")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={"/assets/images/evaluación_PI.jpg"}
                  alt="Imagen de Evaluación de Proyectos Inmobiliarios"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">
                  Evaluación de Proyectos Inmobiliarios
                </h2>
                <p className="card-paragraph">
                  !Antes de tomar la decisión de invertir en un proyecto, es necesario evaluarlo¡
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("evaluacion-de-proyectos-inmobliarios")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/estudios_factibilidad.jpg"
                  }
                  alt="Imagen de Estudios de Factibilidad"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Estudios de Factibilidad</h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("estudios-de-factibilidad")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/analisis_inversión_inmobiliaria.jpg"
                  }
                  alt="Imagen de Análisis de Inversión Inmobiliaria"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">
                  Análisis de Inversión Inmobiliaria
                </h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("analisis-de-inversion-inmobiliaria")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/reespresión_edos_financieros.jpg"
                  }
                  alt="Imagen de Reespresión de Estados Financieros"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">
                  Reexpresión de Estados Financieros
                </h2>
                <p className="card-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, officiis.
                </p>
                <div className="card-button">
                  <button type="button" onClick={() => onOpenService("reexpresion-de-estados-financieros")}>
                    LEER MÁS
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesCards;
