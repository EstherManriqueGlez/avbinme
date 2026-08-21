import React, { Fragment, useEffect } from "react";
import "./ServicesSlider.scss";

const heroSlider = () => {
  const slider = document.querySelector("#hero-slider");
  if (slider) {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    const btnLeft = document.querySelector("#btn-left");

    const btnRight = document.querySelector("#btn-right");

    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    if (btnRight) {
      btnRight.addEventListener("click", () => {
        Next(slider);
      });
    }

    if (btnLeft) {
      btnLeft.addEventListener("click", () => {
        Previous(slider);
      });
    }
  }
}

const Next = (slider) => {
  let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
};

const Previous = (slider) => {
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
};


const ServicesSlider = () => {
  useEffect(() => {
    heroSlider();
  }, []);

  return (
    <Fragment>
      <section
        className="services-slider"
        aria-label="Contenido de la sección de Servicios"
      >
        <div className="container-slider">
          <div className="hero-slider" id="hero-slider">
            <div className="slider-section">
              <img
                src={'/assets/images/slide-1.jpg'}
                alt="Imagen de Negocios en Marcha"
              />
              <div className="slider-info">
                <h3>
                  Valuación de <br /> Negocios en Marcha
                </h3>
              </div>
            </div>
            <div className="slider-section">
              <img
                src={'/assets/images/slide-2.jpg'}
                alt="Imagen de Negocios en Marcha"
              />
              <div className="slider-info">
                <h3>
                  Evaluación de <br /> Proyectos Inmobiliarios
                </h3>
              </div>
            </div>
            <div className="slider-section">
              <img
                src={'/assets/images/slide-3.jpg'}
                alt="Imagen de Negocios en Marcha"
              />
              <div className="slider-info">
                <h3>
                  Valuación de <br /> Maquinaria y Equipo
                </h3>
              </div>
            </div>
            <div className="slider-section">
              <img
                src={'/assets/images/slide-4.jpg'}
                alt="Imagen de Negocios en Marcha"
              />
              <div className="slider-info">
                <h3>
                  Análisis de <br /> Inversión Inmobiliaria
                </h3>
              </div>
            </div>
          </div>
          <div className="slider-btn btn-left" id="btn-left"></div>
          <div className="slider-btn btn-right" id="btn-right"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesSlider;
