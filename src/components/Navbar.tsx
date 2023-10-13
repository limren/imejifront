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
            <Link to='/images'>Mes images</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='/profile'>Mon profil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
