import React from "react";
import { User } from "../interfaces/User";
import { Link, useNavigate } from "react-router-dom";
import * as obj from "../utils/Text";
import "../styles/Profile.css";
import { logout } from "../utils/API";
export const Profile = ({
  user,
  setIsAuth,
  setToken,
}: {
  user?: User;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setToken?: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const objText = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;

  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logout();
    if (response?.status === 200) {
      setIsAuth(false);
      setToken!(null);
      navigate("/");
    }
  };
  return (
    <section className="profile">
      <header>
        <h1>{objText.profile}</h1>
        <button onClick={handleLogout}>{objText.logout}</button>
      </header>
      <main>
        <section>
          <header>
            <h2>{objText.personalinformations}</h2>
          </header>
          <main>
            <section>
              <h3>{objText.surname}</h3>
              <p>{user?.surname}</p>
            </section>{" "}
            <section>
              <h3>{objText.firstname}</h3>
              <p>{user?.firstname}</p>
            </section>
            <section>
              <h3>Pseudo</h3>
              <p>{user?.pseudo}</p>
            </section>
            <section>
              <h3>Email</h3>
              <p>{user?.email}</p>
            </section>
            <section></section>
          </main>
        </section>
        <section>
          <Link to="/dashboard">{objText.seeimage}</Link>
        </section>
      </main>
    </section>
  );
};
