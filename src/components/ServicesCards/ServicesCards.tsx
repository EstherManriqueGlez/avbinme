import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ServicesCards.scss";

const ServicesCards = () => {
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
                  <button data-modal-id="inmuebles">
                    <Link to="#inmuebles">LEER MÁS</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/maquinaria_equipo.jpg"
                  }
                  alt="Imagen de Maquinaria y Equipo"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Maquinaria y Equipo</h2>
                <p className="card-paragraph">
                  !La importancia de conocer el valor de tus activos para la toma de decisiones¡
                </p>
                <div className="card-button">
                  <button data-modal-id="maquinaria-y-equipo">
                    <Link to="#maquinaria-y-equipo">LEER MÁS</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/opinion_valor.jpg"
                  }
                  alt="Imagen de Opinión de Valor"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Avalúos Judiciales</h2>
                <p className="card-paragraph">
                  ¿Requieres de un Avalúo para una Controversia Judicial?
                </p>
                <div className="card-button">
                  <button data-modal-id="avaluo-judicial">
                    <Link
                      to="#avaluo-judicial"
                    >
                      LEER MÁS
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/justipreciación_rentas.jpg"
                  }
                  alt="Imagen de Justipreciación
              de Rentas"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Justipreciación de Rentas</h2>
                <p className="card-paragraph">
                  ¿Quieres saber cuál es el monto más apropiado para arrendamiento de un Bien Inmueble?
                </p>
                <div className="card-button">
                  <button data-modal-id="justipreciacion-de-rentas">
                    <Link
                      to="#justipreciacion-de-rentas"
                    >
                      LEER MÁS
                    </Link>
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
                  <button data-modal-id="avaluo-maestro">
                    <Link to="#avaluo-maestro">
                      LEER MÁS
                    </Link>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/regimen_propiedad_condominio.jpg"
                  }
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
                  <button data-modal-id="regimen-de-propiedad-en-condominio">
                    <Link
                      to="#regimen-de-propiedad-en-condominio"
                    >
                      LEER MÁS
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/negocios_en_marcha.jpg"
                  }
                  alt="Imagen de Negocios en Marcha"
                />
              </div>
              <div className="card-info">
                <h2 className="card-title">Negocios en Marcha</h2>
                <p className="card-paragraph">
                  ¿Necesitas saber cuál es el valor de tu negocio?
                </p>
                <div className="card-button">
                  <button data-modal-id="negocios-en-marcha">
                    <Link
                      to="#negocios-en-marcha"
                    >
                      LEER MÁS
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-services">
              <div className="card-image">
                <img
                  src={
                    "/assets/images/evaluación_PI.jpg"
                  }
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
                  <button data-modal-id="evaluacion-de-proyectos-inmobliarios">
                    <Link
                      to="#evaluacion-de-proyectos-inmobliarios"
                    >
                      LEER MÁS
                    </Link>
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
                  <button data-modal-id="estudios-de-factibilidad">
                    <Link
                      to="#estudios-de-factibilidad"
                    >
                      LEER MÁS
                    </Link>
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
                  <button data-modal-id="analisis-de-inversion-inmobiliaria">
                    <Link
                      to="#analisis-de-inversion-inmobiliaria"
                    >
                      LEER MÁS
                    </Link>
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
                  <button data-modal-id="reexpresion-de-estados-financieros">
                    <Link
                      to="#reexpresion-de-estados-financieros"
                    >
                      LEER MÁS
                    </Link>
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
