
import { useEffect, useRef } from "react";
import "./ServicesCardsModals.scss";
import { SERVICES_DATA } from "@/utils/servicesData";

interface ServicesCardsModalsProps {
  service: string | null;
  onClose: () => void;
}

const ServicesCardsModals = ({ service, onClose }: ServicesCardsModalsProps) => {
  const serviceInfo = service ? SERVICES_DATA.find((s) => s.id === service) : null;
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [service, onClose]);

  return (
    <>
      <section className="cards-modals">
        <div
          className="modal"
          style={{
            opacity: service ? 1 : 0,
            pointerEvents: service ? "all" : "none",
          }}
          role="dialog"
          aria-modal="true"
          aria-hidden={!service}
          aria-label={serviceInfo?.title ?? "Detalle del servicio"}
          onClick={onClose}
        >
          <div className="modals-content" onClick={(e) => e.stopPropagation()}>
            <div>
              <button
                ref={closeRef}
                className="icon-modal-close"
                type="button"
                tabIndex={service ? 0 : -1}
                aria-label="Cerrar ventana"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-info">
              {service && serviceInfo && (
                <>
                  <span className={serviceInfo.iconClass} aria-hidden="true"></span>
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
