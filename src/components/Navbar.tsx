import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <header>
      <h1>Imeji</h1>
      <nav>
        <ul>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/profile'>Mon profil</Link>
          </li>
          <li>
            <Link to='/login'>Connexion</Link>
          </li>
          <li>
            <Link to='/register'>M'enregistrer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
