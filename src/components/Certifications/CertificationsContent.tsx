import React, { Fragment, useEffect } from "react";

const acordionToggle = () => {
  const blocks = document.querySelectorAll(".acordion .block");
  if (blocks.length) {
    blocks.forEach((block) => {
      const title = block.querySelector(".title");
      title.addEventListener("click", () => {
        if (block.classList.contains("active")) {
          block.classList.remove("active");
        } else {
          blocks.forEach((b) => {
            b.classList.remove("active");
          });
          block.classList.add("active");
        }
      });
    });
  }
};

const CertificationsContent = () => {
  useEffect(() => {
    acordionToggle();
  }, []);

  return (
    <Fragment>
      <section
        className="content-certifications"
        aria-label="Contenido de la sección de Certificaciones"
      >
        <div
          className="main-subtitle"
          role="region"
          aria-label="Título de la página Cédulas Profesionales y Certificaciones"
        >
          <h2>CERTIFICACIONES</h2>
          <span className="line-title"></span>
        </div>

        <div className="container">
          <div className="acordion">
            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Colegio de Arquitectos de la CDMX
                  <span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={
                    "/assets/images/Logo-CAM-SAM.png"
                  }
                  alt="Logotipo de CAM-SAM"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>

            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Sociedad Hipotecaria Federal
                  <span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={"/assets/images/LOGO_SHF.svg"}
                  alt="Logotipo de SHF"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>

            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Tribunal Superior de Justicia de la CDMX
                  <span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={"/assets/images/TSJ.png"}
                  alt="Logotipo del TSJ"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>

            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Poder Judicial de la Federación
                  <span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={"/assets/images/PJF.png"}
                  alt="Logotipo del PJF"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>

            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Tesorería de la CDMX<span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={"/assets/images/Tesoteria.svg"}
                  alt="Logotipo de la Tesorería de la CDMX"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>

            <div className="block">
              <div className="title-acordion">
                <h2 className="title">
                  Instituto de Administración y Avalúos de Bienes Nacionales
                  <span className="icon-acordion"></span>
                </h2>
              </div>
              <div className="content-acordion">
                <img
                  src={"/assets/images/Indaabin.png"}
                  alt="Logotipo de Indaabin"
                />
                <p className="description-acordion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat minus consequuntur necessitatibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CertificationsContent;
