import { Card } from "../Card/Card";
import { SERVICES_DATA } from "@/utils/servicesData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./ServicesCards.scss";

interface ServicesCardsProps {
  onOpenService: (id: string) => void;
}

export const ServicesCards = ({ onOpenService }: ServicesCardsProps) => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <section ref={sectionRef} className="cards-services">
        <div className="container">
          <div className="cards-wrapper">
            {SERVICES_DATA.map((card, i) => {
              const cardElement = (
                <Card
                  image={card.image}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  description={card.shortDescription}
                  actionLabel="LEER MÁS"
                  onAction={() => onOpenService(card.id)}
                />
              );

              if (i === 0) {
                return (
                  <div key={card.id} id={card.id}>
                    {cardElement}
                  </div>
                );
              }

              return (
                <div
                  key={card.id}
                  id={card.id}
                  className={"scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
                  style={{ transitionDelay: `${(i - 1) * 0.1 + 0.15}s` }}
                >
                  {cardElement}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

