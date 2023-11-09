import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logout } from "../utils/API";
export const Navbar = ({ isAuth, username }: { isAuth: boolean, username?:string }) => {
  const IsLogged = () => {
    return (
      <li>
        <Link to='#' onClick={logout}>
          Bienvenue, {username}
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
    <header className='navbar'>
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
