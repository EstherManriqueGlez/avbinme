
import imgMision from "@/assets/images/Misión.jpg";
import imgVision from "@/assets/images/Visión.jpg";
import imgValores from "@/assets/images/Valores.jpg";
import "./WeCards.scss";

const WeCards = () => {
  return (
    <>
      <section
        className="cards-we"
        aria-label="Contenido de Misión, Visión y Valores"
      >
        <div className="container">
          <div className="cards-wrapper">
            <div className="card">
              <div className="card-image-mision">
                <img
                  className="is-fluid"
                  src={imgMision}
                  alt="Imagen de Misión"
                />
              </div>
              <div className="content-card-title">
                <h3 className="mision">Misión</h3>
              </div>
              <p>
                Brindar servicios profesionales de valuación pericial y consultoría inmobiliaria en todos sus ámbitos, rigiéndonos bajo los más altos estándares de calidad, precisión técnica y normatividad legal. Marcamos la diferencia mediante un trato cercano, ético y altamente personalizado para cada cliente institucional, corporativo o particular.
              </p>
            </div>
            <div className="card">
              <div className="card-image-vision">
                <img
                  className="is-fluid"
                  src={imgVision}
                  alt="Imagen de Visión"
                />
              </div>
              <div className="content-card-title">
                <h3 className="mision">Visión</h3>
              </div>
              <p>
                Consolidarnos como la firma líder y referente absoluto a nivel nacional en servicios de valuación de bienes inmuebles, maquinaria, equipo y proyectos de inversión; reconocidos por nuestra inquebrantable solidez pericial, innovación metodológica y confiabilidad ante tribunales, notarías y corporativos.
              </p>
            </div>
            <div className="card">
              <div className="card-image-valores">
                <img
                  className="is-fluid"
                  src={imgValores}
                  alt="Imagen de Valores"
                />
              </div>
              <div className="content-card-title">
                <h3 className="mision">Valores</h3>
              </div>
              <p>
                <strong>Ética y Transparencia:</strong> Imparcialidad absoluta en cada dictamen.<br />
                <strong>Rigor Técnico:</strong> Metodología sustentada en la normatividad vigente.<br />
                <strong>Confidencialidad:</strong> Protección y reserva estricta de la información patrimonial.<br />
                <strong>Compromiso:</strong> Respuesta oportuna y precisión jurídica para la toma de decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeCards;
