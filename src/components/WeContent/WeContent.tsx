
import MainSubtitle from "../MainSubtitle/MainSubtitle";
import "./WeContent.scss";

const WeContent = () => {
  return (
    <>
      <section className="content-we" aria-label="Contenido de la sección de Nosotros">
      <MainSubtitle title="NOSOTROS" ariaLabel="Título de la página Nosotros" />
      <div className="container">
        <p className="">Brindar servicios profesionales en valuación y en todos sus ámbitos, en base a los más altos
          estándares de calidad y servicio.
          El servicio a los clientes es nuestro principal Misión. Por ello buscamos marcar la diferencia con un trato
          cercano y personalizado, brindando un mejor servicio.</p>
      </div>
    </section>
    </>
  )
}

export default WeContent
