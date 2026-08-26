
import "./ServicesCardsModals.scss";
import { SERVICES_DATA } from "@/utils/servicesData";

interface ServicesCardsModalsProps {
  service: string | null;
  onClose: () => void;
}

const ServicesCardsModals = ({ service, onClose }: ServicesCardsModalsProps) => {
  const serviceInfo = service ? SERVICES_DATA.find((s) => s.id === service) : null;

  return (
    <>
      <section className="cards-modals">
        <div
          className="modal"
          style={{
            opacity: service ? 1 : 0,
            pointerEvents: service ? "all" : "none",
          }}
          aria-hidden={!service}
        >
          <div className="modals-content">
            <div>
              <span
                className="icon-modal-close"
                role="button"
                tabIndex={service ? 0 : -1}
                aria-label="Cerrar ventana"
                onClick={onClose}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onClose();
                }}
              ></span>
            </div>
            <div className="modal-info">
              {service && serviceInfo && (
                <>
                  <span className={serviceInfo.iconClass}></span>
                  <h2>{serviceInfo.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: serviceInfo.modalDescription }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCardsModals;
