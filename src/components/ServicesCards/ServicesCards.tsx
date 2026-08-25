
import imgInmuebles from "@/assets/images/inmuebles.jpg";
import imgMaquinaria from "@/assets/images/maquinaria_equipo.jpg";
import imgOpinionValor from "@/assets/images/opinion_valor.jpg";
import imgJustipreciacion from "@/assets/images/justipreciación_rentas.jpg";
import imgRegimenCondominio from "@/assets/images/regimen_propiedad_condominio.jpg";
import imgNegociosMarcha from "@/assets/images/negocios_en_marcha.jpg";
import imgEvaluacionPI from "@/assets/images/evaluación_PI.jpg";
import "./ServicesCards.scss";

interface ServicesCardsProps {
  onOpenService: (id: string) => void;
}

const ServicesCards = ({ onOpenService }: ServicesCardsProps) => {
  return (
    <>
      <section className="cards-services">
        <div className="container">
          <div className="cards-wrapper">
            <div className="card-services" id="inmuebles">
              <div className="card-image">
                <img
                  src={imgInmuebles}
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
            <div className="card-services" id="maquinaria-y-equipo">
              <div className="card-image">
                <img
                  src={imgMaquinaria}
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
            <div className="card-services" id="avaluo-judicial">
              <div className="card-image">
                <img
                  src={imgOpinionValor}
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
            <div className="card-services" id="justipreciacion-de-rentas">
              <div className="card-image">
                <img
                  src={imgJustipreciacion}
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
            <div className="card-services" id="regimen-de-propiedad-en-condominio">
              <div className="card-image">
                <img
                  src={imgRegimenCondominio}
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
            <div className="card-services" id="negocios-en-marcha">
              <div className="card-image">
                <img
                  src={imgNegociosMarcha}
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
            <div className="card-services" id="evaluacion-de-proyectos-inmobliarios">
              <div className="card-image">
                <img
                  src={imgEvaluacionPI}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCards;
