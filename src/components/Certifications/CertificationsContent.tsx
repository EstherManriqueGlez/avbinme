import MainSubtitle from "../MainSubtitle/MainSubtitle";
import Card from "../Card/Card";
import { CERTIFICATIONS_DATA } from "@/utils/cardsData";
import "./CertificationsContent.scss";

const CertificationsContent = () => {
  return (
    <>
      <section
        className="content-certifications"
        aria-label="Contenido de la sección de Certificaciones"
      >
        <MainSubtitle
          title="CERTIFICACIONES Y REGISTROS OFICIALES"
          ariaLabel="Título de la página Cédulas Profesionales y Certificaciones"
        />

        <div className="container">
          <div className="certifications-grid">
            {CERTIFICATIONS_DATA.map((item) => (
              <Card
                key={item.title}
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
                variant="certification"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsContent;
