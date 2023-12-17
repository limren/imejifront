import React from "react";
import * as obj from "../utils/Text";
import "../styles/Homepage.css";
export const Homepage = () => {
  const objTxt = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;

  return (
    <section className="homepage">
      <header>
        <h2>Imeji - {objTxt.intro}</h2>
      </header>
      <main>
        <section>
          <p>{objTxt.intro1}</p>
        </section>
        <section>
          <h3>{objTxt.freeapi}</h3>
          <p>{objTxt.freeapitxt}</p>
        </section>
        <section>
          <h3>{objTxt.unlimitedrequest}</h3>
          <p>{objTxt.unlimitedrequesttxt}</p>
        </section>
        <section>
          <h3>Open source</h3>
          <p>{objTxt.intro2}</p>
        </section>
        <section>
          <p>{objTxt.intro3}</p>
        </section>
      </main>
    </section>
  );
};
