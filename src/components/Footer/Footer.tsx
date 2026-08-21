import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img
              src={"/assets/images/Logo_Negativo.svg"}
              alt="Logotipo AvBIME"
            />
          </Link>
        </div>
        <div className="footer-contact">
          <h5>
            "Contamos con todas las certificaciones y más de 30 años de
            experiencia"
          </h5>
          <div className="footer-links">
            <a href="tel:5529551257" target="_blank" rel="noreferrer">
              55 2955 1257
            </a>{" "}
            | {" "}
            <a href="mailto:aaaaa@avbinme.com.mx" target="_blank" rel="noreferrer">
              aaaaa@avbinme.com.mx
            </a>
          </div>
          <p className="is-small">
            © 2021 Desarrollado por: Esther Manrique González
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
