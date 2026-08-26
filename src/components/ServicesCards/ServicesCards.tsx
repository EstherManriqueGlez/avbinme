import Card from "../Card/Card";
import { SERVICES_DATA } from "@/utils/servicesData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./ServicesCards.scss";

interface ServicesCardsProps {
  onOpenService: (id: string) => void;
}

const ServicesCards = ({ onOpenService }: ServicesCardsProps) => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <section
        ref={sectionRef}
        className={"cards-services scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
      >
        <div className="container">
          <div className="cards-wrapper">
            {SERVICES_DATA.map((card, i) => (
              <div
                key={card.id}
                id={card.id}
                className={"scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <Card
                  image={card.image}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  description={card.shortDescription}
                  actionLabel="LEER MÁS"
                  onAction={() => onOpenService(card.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCards;
