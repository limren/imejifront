import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import * as obj from "../utils/Text";
export const Footer = () => {
  const objText = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;

  return (
    <section className="footer">
      <header>
        <h3>Imeji</h3>
      </header>
      <main className="footer-about">
        <ul>
          <li>
            <Link to="/">{objText.about}</Link>
          </li>
          <li>{objText.goal}</li>
          <li>
            <section className="footer-links">
              <h4>{objText.followmedia}</h4>
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
