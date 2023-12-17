import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosServices } from "../utils/axiosServices";
import { login } from "../utils/API";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import * as obj from "../utils/Text";

export const Login = ({
  isAuth,
  setIsAuth,
  setToken,
}: {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState({
    boolean: false,
    message: "",
  });
  const [pwError, setPwError] = useState({
    boolean: false,
    message: "",
  });
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regex.test(email)) {
      setEmailError({
        boolean: true,
        message: lang === "fr" ? "Email invalide" : "Invalid email",
      });
      return;
    }
    if (password.length < 8) {
      setPwError({
        boolean: true,
        message:
          lang === "fr" ? "Mot de passe trop court" : "Password too short",
      });
      return;
    }
    console.log("logs : ", email, password);
    const response = await login(email, password);
    console.log("respojnse : ", response);
    if (response?.status === 200) {
      setIsAuth(true);
      console.log("token : ", response.data.token);
      setToken(response.data.token);
      navigate("/");
    }
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  console.log("error mdp :", pwError, password.length);
  const objText = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
  return (
    <section className="login">
      <main>
        <header>
          <h1>{objText.login}</h1>
        </header>
        <main>
          <form onSubmit={handleLogin}>
            <section>
              <label htmlFor="email">{objText.enteremail}</label>
              <input
                type="email"
                id="email"
                className={emailError.boolean ? "error" : ""}
                onChange={(e) => {
                  if (!regex.test(e.target.value) && !emailError.boolean) {
                    setEmailError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Email invalide"
                          : "Invalid email address",
                    });
                  } else if (regex.test(e.target.value) && emailError.boolean) {
                    setEmailError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setEmail(e.target.value);
                }}
              />
              {emailError.boolean && <p>{emailError.message}</p>}
            </section>
            <section>
              <label htmlFor="password">{objText.enterpassword}</label>
              <input
                type="password"
                id="password"
                className={pwError.boolean ? "error" : ""}
                onChange={(e) => {
                  console.log("e : ", e.target.value, "password : ", password);
                  if (e.target.value.length < 8 && !pwError.boolean) {
                    setPwError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Mot de passe trop court"
                          : "Password too short",
                    });
                  } else if (e.target.value.length >= 8 && pwError.boolean) {
                    setPwError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setPassword(e.target.value);
                }}
              />
              {pwError.boolean && <p>{pwError.message}</p>}
            </section>
            <input type="submit" value={objText.connect} />
          </form>
        </main>
      </main>
    </section>
  );
};
