import { Card } from "../Card/Card";
import { WE_CARDS_DATA } from "@/utils/cardsData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./WeCards.scss";

export const WeCards = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <section
        ref={sectionRef}
        className={"cards-we scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
        aria-label="Contenido de Misión, Visión y Valores"
      >
        <div className="container">
          <div className="cards-wrapper">
            {WE_CARDS_DATA.map((card, i) => (
              <div
                key={card.title}
                className={"scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
                style={{ transitionDelay: `${(i + 1) * 0.15}s` }}
              >
                <Card
                  image={card.image}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

