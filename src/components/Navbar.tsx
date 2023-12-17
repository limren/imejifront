import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/API";
import * as obj from "../utils/Text";
import { Profile } from "../assets/icons/Profile";
import { Dashboard } from "../assets/icons/Dashboard";
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
          <h3>
            {objText.welcome} {username}
          </h3>
        </Link>
      </li>
    );
  };
  const IsNotLogged = () => {
    return (
      <>
        <li>
          <Link to="/login">
            <h3>{objText.login}</h3>
          </Link>
          <Link to="/register">
            <h3>{objText.register}</h3>
          </Link>
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
            <Link to="/dashboard">
              <Dashboard />
              <h3 className="li-subtitle">{objText.dashboard}</h3>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <Profile />
              <h3 className="li-subtitle">{objText.profile}</h3>
            </Link>
          </li>
          {isAuth ? <IsLogged /> : <IsNotLogged />}
        </ul>
      </nav>
    </header>
  );
};
