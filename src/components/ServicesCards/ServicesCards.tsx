import Card from "../Card/Card";
import { SERVICES_CARDS_DATA } from "@/utils/cardsData";
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
            {SERVICES_CARDS_DATA.map((card) => (
              <div key={card.id} id={card.id}>
                <Card
                  image={card.image}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  description={card.description}
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
