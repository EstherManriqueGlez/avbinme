import { Link } from 'react-router-dom';
import { MainSubtitle } from '../MainSubtitle/MainSubtitle';
import { SERVICES_DATA } from '@/utils/servicesData';

export const AvaluosBienesInmuebles = () => {
  return (
    <>
      <section
        className="services"
        aria-label="Título principal de la página inicio"
      >
        <div
          className="main-title"
          role="region"
          aria-label="Título principal de la página inicio"
        >
          <h1>
            Avalúos de Bienes Inmuebles <br /> Maquinaria y Equipo
          </h1>
        </div>

        <MainSubtitle title="AVALÚOS" variant="accent" ariaLabel="Título de la página Inicio" />

        <div className="services-content">
          <div className="container">
            <ul className="list-services">
              {SERVICES_DATA.map((service, index) => (
                <li key={service.id} className={`service-${index + 1}`} id={`service-${index + 1}`}>
                  <Link to={`/servicios#${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

