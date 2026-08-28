import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICES_SLIDES } from "@/utils/servicesData";
import "./ServicesSlider.scss";

const TRANSITION_MS = 500;
const AUTOPLAY_MS = 5000;

export const ServicesSlider = () => {
  const [order, setOrder] = useState<number[]>([SERVICES_SLIDES.length - 1, 0, 1, 2]);
  const [offset, setOffset] = useState(0);
  const [withTransition, setWithTransition] = useState(false);
  const busyRef = useRef(false);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  const startAutoPlay = useCallback(() => {
    clearAutoPlay();
    autoPlayTimerRef.current = setTimeout(() => {
      rotate(1);
    }, AUTOPLAY_MS);
  }, []);

  const rotate = (direction: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setWithTransition(true);
    setOffset(direction * -100);

    transitionTimerRef.current = setTimeout(() => {
      setWithTransition(false);
      setOrder((current) =>
        direction === 1
          ? [...current.slice(1), current[0]]
          : [current[current.length - 1], ...current.slice(0, -1)]
      );
      setOffset(0);
      busyRef.current = false;
      startAutoPlay();
    }, TRANSITION_MS);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      clearAutoPlay();
    };
  }, [startAutoPlay]);

  return (
    <>
      <section
        className="services-slider"
        aria-label="Contenido de la sección de Servicios"
      >
        <div
          className="container-slider"
          onMouseEnter={clearAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div
            className="hero-slider"
            id="hero-slider"
            aria-live="polite"
            aria-atomic="true"
            style={{
              marginLeft: `${-100 + offset}%`,
              transition: withTransition ? `margin-left ${TRANSITION_MS}ms` : "none",
            }}
          >
            {order.map((slideIndex) => {
              const slide = SERVICES_SLIDES[slideIndex];
              return (
                <div className="slider-section" key={slideIndex}>
                  <img src={slide.image} alt={slide.imageAlt} loading="lazy" decoding="async" />
                  <div className="slider-info">
                    <h3>{slide.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="slider-btn btn-left"
            id="btn-left"
            type="button"
            aria-label="Slide anterior"
            onClick={() => rotate(-1)}
          ></button>
          <button
            className="slider-btn btn-right"
            id="btn-right"
            type="button"
            aria-label="Slide siguiente"
            onClick={() => rotate(1)}
          ></button>
        </div>
      </section>
    </>
  );
};

