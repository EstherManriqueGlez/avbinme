import React, { Fragment, useState } from "react";
import imgCamSam from "@/assets/images/Logo-CAM-SAM.png";
import logoShf from "@/assets/images/LOGO_SHF.svg";
import imgTsj from "@/assets/images/TSJ.png";
import imgPjf from "@/assets/images/PJF.png";
import imgTesoreria from "@/assets/images/Tesoteria.svg";
import imgIndaabin from "@/assets/images/Indaabin.png";
import "./CertificationsContent.scss";

const CERTIFICATIONS = [
  {
    title: "Colegio de Arquitectos de la CDMX",
    img: imgCamSam,
    alt: "Logotipo de CAM-SAM",
  },
  {
    title: "Sociedad Hipotecaria Federal",
    img: logoShf,
    alt: "Logotipo de SHF",
  },
  {
    title: "Tribunal Superior de Justicia de la CDMX",
    img: imgTsj,
    alt: "Logotipo del TSJ",
  },
  {
    title: "Poder Judicial de la Federación",
    img: imgPjf,
    alt: "Logotipo del PJF",
  },
  {
    title: "Tesorería de la CDMX",
    img: imgTesoreria,
    alt: "Logotipo de la Tesorería de la CDMX",
  },
  {
    title: "Instituto de Administración y Avalúos de Bienes Nacionales",
    img: imgIndaabin,
    alt: "Logotipo de Indaabin",
  },
];

const CertificationsContent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            {CERTIFICATIONS.map((item, index) => (
              <div
                className={"block" + (activeIndex === index ? " active" : "")}
                key={item.title}
              >
                <div className="title-acordion">
                  <h2
                    className="title"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === index ? null : index
                      )
                    }
                  >
                    {item.title}
                    <span className="icon-acordion"></span>
                  </h2>
                </div>
                <div className="content-acordion">
                  <img src={item.img} alt={item.alt} />
                  <p className="description-acordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat minus consequuntur necessitatibus
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CertificationsContent;
