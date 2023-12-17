import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/API";
import * as obj from "../utils/Text";
export const Navbar = ({
  isAuth,
  setIsAuth,
  setToken,
  username,
}: {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setToken?: React.Dispatch<React.SetStateAction<string | null>>;
  username?: string;
}) => {
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";

  const objText = lang === "fr" ? obj.fr : obj.eng;
  const handleLogout = async () => {
    const response = await logout();
    if (response?.status === 200) {
      setIsAuth(false);
      setToken!(null);
      navigate("/");
    }
  };
  const IsLogged = () => {
    return (
      <li>
        <Link to="#" onClick={handleLogout}>
          {objText.welcome} {username}
        </Link>
      </li>
    );
  };
  const IsNotLogged = () => {
    return (
      <>
        <li>
          <Link to="/login">{objText.login}</Link>
        </li>
        <li>
          <Link to="/register">{objText.register}</Link>
        </li>
      </>
    );
  };
  return (
    <header className="navbar">
      <section>
        <Link to="/">
          <img src="./IconNav.png" alt="" />
        </Link>
      </section>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">{objText.dashboard}</Link>
          </li>
          <li>
            <Link to="/profile">{objText.profile}</Link>
          </li>
          {isAuth ? <IsLogged /> : <IsNotLogged />}
        </ul>
      </nav>
    </header>
  );
};
