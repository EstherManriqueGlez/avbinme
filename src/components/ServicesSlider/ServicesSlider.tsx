import React, { Fragment, useEffect, useRef, useState } from "react";
import "./ServicesSlider.scss";

const SLIDES = [
  {
    img: "/assets/images/slide-1.jpg",
    alt: "Imagen de Negocios en Marcha",
    title: (
      <>
        Valuación de <br /> Negocios en Marcha
      </>
    ),
  },
  {
    img: "/assets/images/slide-2.jpg",
    alt: "Imagen de Evaluación de Proyectos Inmobiliarios",
    title: (
      <>
        Evaluación de <br /> Proyectos Inmobiliarios
      </>
    ),
  },
  {
    img: "/assets/images/slide-3.jpg",
    alt: "Imagen de Valuación de Maquinaria y Equipo",
    title: (
      <>
        Valuación de <br /> Maquinaria y Equipo
      </>
    ),
  },
  {
    img: "/assets/images/slide-4.jpg",
    alt: "Imagen de Análisis de Inversión Inmobiliaria",
    title: (
      <>
        Análisis de <br /> Inversión Inmobiliaria
      </>
    ),
  },
];

const TRANSITION_MS = 500;

const ServicesSlider = () => {
  // Orden inicial rotado (último al frente), igual que el comportamiento original
  const [order, setOrder] = useState<number[]>([SLIDES.length - 1, 0, 1, 2]);
  const [offset, setOffset] = useState(0);
  const [withTransition, setWithTransition] = useState(false);
  const busyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const rotate = (direction: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setWithTransition(true);
    setOffset(direction * -100);

    timerRef.current = setTimeout(() => {
      setWithTransition(false);
      setOrder((current) =>
        direction === 1
          ? [...current.slice(1), current[0]]
          : [current[current.length - 1], ...current.slice(0, -1)]
      );
      setOffset(0);
      busyRef.current = false;
    }, TRANSITION_MS);
  };

  return (
    <Fragment>
      <section
        className="services-slider"
        aria-label="Contenido de la sección de Servicios"
      >
        <div className="container-slider">
          <div
            className="hero-slider"
            id="hero-slider"
            style={{
              marginLeft: `${-100 + offset}%`,
              transition: withTransition ? `all ${TRANSITION_MS}ms` : "none",
            }}
          >
            {order.map((slideIndex) => {
              const slide = SLIDES[slideIndex];
              return (
                <div className="slider-section" key={slideIndex}>
                  <img src={slide.img} alt={slide.alt} />
                  <div className="slider-info">
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="slider-btn btn-left"
            id="btn-left"
            role="button"
            tabIndex={0}
            aria-label="Slide anterior"
            onClick={() => rotate(-1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") rotate(-1);
            }}
          ></div>
          <div
            className="slider-btn btn-right"
            id="btn-right"
            role="button"
            tabIndex={0}
            aria-label="Slide siguiente"
            onClick={() => rotate(1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") rotate(1);
            }}
          ></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesSlider;
