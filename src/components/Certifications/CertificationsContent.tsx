
import imgCamSam from "@/assets/images/Logo-CAM-SAM.png";
import logoShf from "@/assets/images/LOGO_SHF.svg";
import imgTsj from "@/assets/images/TSJ.png";
import imgPjf from "@/assets/images/PJF.png";
import imgTesoreria from "@/assets/images/Tesoteria.svg";
import imgIndaabin from "@/assets/images/Indaabin.png";
import MainSubtitle from "../MainSubtitle/MainSubtitle";
import "./CertificationsContent.scss";

const CERTIFICATIONS = [
  {
    title: "Colegio de Arquitectos de la CDMX (CAM-SAM)",
    desc: "Registro oficial y colegiación que avala la excelencia y el estricto apego a las normas éticas y profesionales del gremio.",
    img: imgCamSam,
    alt: "Logotipo de CAM-SAM",
  },
  {
    title: "Sociedad Hipotecaria Federal (SHF)",
    desc: "Validador y regulador técnico para la emisión de avalúos bancarios y de vivienda con reconocimiento federal.",
    img: logoShf,
    alt: "Logotipo de SHF",
  },
  {
    title: "Tribunal Superior de Justicia de la CDMX (TSJ)",
    desc: "Peritos valuadores acreditados ante el poder judicial para dictámenes periciales en controversias y litigios mercantiles o civiles.",
    img: imgTsj,
    alt: "Logotipo del TSJ",
  },
  {
    title: "Poder Judicial de la Federación (PJF)",
    desc: "Acreditación federal para la emisión de dictámenes periciales oficiales en juzgados y tribunales de distrito.",
    img: imgPjf,
    alt: "Logotipo del PJF",
  },
  {
    title: "Tesorería de la CDMX",
    desc: "Peritos valuadores autorizados para dictámenes fiscales, catastrales y determinaciones de valor ante la tesorería local.",
    img: imgTesoreria,
    alt: "Logotipo de la Tesorería de la CDMX",
  },
  {
    title: "Instituto de Administración y Avalúos de Bienes Nacionales (INDAABIN)",
    desc: "Competencia técnica reconocida para la valuación y administración de bienes del sector público y federal.",
    img: imgIndaabin,
    alt: "Logotipo de Indaabin",
  },
];

const CertificationsContent = () => {
  return (
    <>
      <section
        className="content-certifications"
        aria-label="Contenido de la sección de Certificaciones"
      >
        <MainSubtitle title="CERTIFICACIONES Y REGISTROS OFICIALES" ariaLabel="Título de la página Cédulas Profesionales y Certificaciones" />

        <div className="container">
          <div className="certifications-grid">
            {CERTIFICATIONS.map((item) => (
              <div className="certification-card" key={item.title}>
                <div className="card-logo">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationsContent;
