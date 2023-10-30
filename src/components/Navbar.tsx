import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logout } from "../utils/API";
export const Navbar = ({ isAuth }: { isAuth: boolean }) => {
  const IsLogged = () => {
    return (
      <li>
        <Link to='#' onClick={logout}>
          Me déconnecter
        </Link>
      </li>
    );
  };
  const IsNotLogged = () => {
    return (
      <>
        <li>
          <Link to='/login'>Connexion</Link>
        </li>
        <li>
          <Link to='/register'>M'enregistrer</Link>
        </li>
      </>
    );
  };
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
          {isAuth ? <IsLogged /> : <IsNotLogged />}
        </ul>
      </nav>
    </header>
  );
};
