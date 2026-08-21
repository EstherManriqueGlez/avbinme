import React, { Fragment, useEffect } from "react";
import { services as dataServices } from "../../utils/services";

const cardsModal = () => {
  const servicesButtons = document.querySelectorAll("[data-modal-id]");
  if (servicesButtons.length) {
    const modal = document.querySelector(".cards-modals .modal");
    const modalClose = modal.querySelector(".icon-modal-close");
    const modalInfo = modal.querySelector(".modal-info");
    let modalContent = "";

    modalClose.addEventListener("click", () => {
      toggleModal(modal, 0, "none");
    });

    servicesButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let service = button.dataset.modalId;
        let serviceInfo = dataServices[service];
        modalContent = `<span class="icon-${service}"></span>
      <h2>${serviceInfo.title}</h2>
      <p>${serviceInfo.description}</p>`;
        modalInfo.innerHTML = "";
        modalInfo.insertAdjacentHTML("afterbegin", modalContent);
        toggleModal(modal, 1, "all");
      });
    });

    let hash = window.location.hash;
    if (hash) {
      hash = hash.replace("#", "");
      const buttonHash = document.querySelector(
        '[data-modal-id="' + hash + '"]'
      );
      if (buttonHash) {
        buttonHash.click();
      }
    }
  }
};

const toggleModal = (modal, opacity, pointer) => {
  modal.style.opacity = opacity;
  modal.style.pointerEvents = pointer;
};

const ServicesCardsModals = () => {
  useEffect(() => {
    cardsModal();
  }, []);

  return (
    <Fragment>
      <section className="cards-modals">
        <div className="modal">
          <div className="modals-content">
            <div>
              <span className="icon-modal-close"></span>
            </div>
            <div className="modal-info"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesCardsModals;
