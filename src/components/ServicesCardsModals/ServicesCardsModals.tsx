import React, { Fragment } from "react";
import "./ServicesCardsModals.scss";
import { services as dataServices } from "../../utils/services";

interface ServicesCardsModalsProps {
  service: string | null;
  onClose: () => void;
}

const ServicesCardsModals = ({ service, onClose }: ServicesCardsModalsProps) => {
  const serviceInfo = service ? dataServices[service as keyof typeof dataServices] : null;

  return (
    <Fragment>
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
                  <span className={`icon-${service}`}></span>
                  <h2>{serviceInfo.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: serviceInfo.description }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesCardsModals;
