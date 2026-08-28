import { MainSubtitle } from "../MainSubtitle/MainSubtitle";
import { Card } from "../Card/Card";
import { CERTIFICATIONS_DATA } from "@/utils/cardsData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./CertificationsContent.scss";

export const CertificationsContent = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <>
      <section
        ref={sectionRef}
        className={"content-certifications scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
        aria-label="Contenido de la sección de Certificaciones"
      >
        <MainSubtitle
          title="CERTIFICACIONES Y REGISTROS OFICIALES"
          ariaLabel="Título de la página Cédulas Profesionales y Certificaciones"
        />

        <div className="container">
          <div className="certifications-grid">
            {CERTIFICATIONS_DATA.map((item, i) => (
              <div
                key={item.title}
                className={"scroll-reveal" + (isVisible ? " scroll-reveal--visible" : "")}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <Card
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  variant="certification"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

