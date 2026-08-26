import Card from "../Card/Card";
import { WE_CARDS_DATA } from "@/utils/cardsData";
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
            {WE_CARDS_DATA.map((card) => (
              <Card
                key={card.title}
                image={card.image}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WeCards;
