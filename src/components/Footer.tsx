import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <section className="footer">
      <header>
        <h3>Imeji</h3>
      </header>
      <main className="footer-about">
        <ul>
          <li>
            <Link to="/">A propos de Imeji</Link>
          </li>
          <li>Carrière</li>
          <li>
            <section className="footer-links">
              <h4>Suivez-nous sur les réseaux sociaux</h4>
              <section>
                <img
                  src="./assets/instagram.svg"
                  className="footer-link"
                  alt="Instagram"
                />
                <img
                  src="./assets/linkedin.svg"
                  className="footer-link"
                  alt="Linkedin"
                />
                <img
                  src="./assets/twitter.svg"
                  className="footer-link"
                  alt="Twitter"
                />
              </section>
            </section>
          </li>
        </ul>
      </main>
    </section>
  );
};
