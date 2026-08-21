import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AvaluosBienesInmuebles = () => {
  return (
    <Fragment>
      <section
        className="services"
        aria-label="Título principal de la página inicio"
      >
        <div
          className="main-title"
          role="region"
          aria-label="Título principal de la página inicio"
        >
          <h1>
            Avalúos de Bienes Inmuebles <br /> Maquinaria y Equipo
          </h1>
        </div>

        <div
          className="main-subtitle"
          role="region"
          aria-label="Título de la página Inicio"
        >
          <h2>AVALÚOS</h2>
         <span className="line-title"></span>
        </div>

        <div className="services-content">
          <div className="container">
            <ul className="list-services">
              <li className="service-1" id="service-1">
                <Link to="/servicios#inmuebles">Inmuebles</Link>
              </li>
              <li className="service-7" id="service-7">
                <Link to="/servicios#maquinaria-y-equipo">
                  Maquinaria y Equipo
                </Link>
              </li>
              <li className="service-11" id="service-11">
                <Link to="/servicios#avaluo-judicial">Avalúos Judiciales</Link>
              </li>
              <li className="service-5" id="service-5">
                <Link to="/servicios#justipreciacion-de-rentas">
                  Justipreciación de Rentas
                </Link>
              </li>
              {/* <li className="service-10" id="service-10">
                <Link to="/servicios#avaluo-maestro">Avalúo Maestro</Link>
              </li> */}
              <li className="service-6" id="service-6">
                <Link to="/servicios#regimen-de-propiedad-en-condominio">
                  Régimen de Propiedad en Condominio
                </Link>
              </li>
              <li className="service-2" id="service-2">
                <Link to="/servicios#negocios-en-marcha">
                  Negocios en Marcha
                </Link>
              </li>
              <li className="service-3" id="service-3">
                <Link to="/servicios#evaluacion-de-proyectos-inmobliarios">
                  Evaluación de Proyectos Inmobiliarios
                </Link>
              </li>
              {/* <li className="service-8" id="service-8">
                <Link to="/servicios#estudios-de-factibilidad">
                  Estudios de Factibilidad
                </Link>
              </li>
              <li className="service-9" id="service-9">
                <Link to="/servicios#analisis-de-inversion-inmobiliaria">
                  Análisis de Inversión Inmobiliaria
                </Link>
              </li>
              <li className="service-4" id="service-4">
                <Link to="/servicios#reexpresion-de-estados-financieros">
                  Reexpresión de Estados Financieros
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AvaluosBienesInmuebles;
