import { useState } from "react";
import { axiosServices } from "../utils/axiosServices";
import * as obj from "../utils/Text";
import "../styles/Register.css";
import {
  validatePseudo,
  validateEmail,
  validatePassword,
} from "../utils/Validate";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [surnameError, setSurnameError] = useState({
    boolean: false,
    message: "",
  });
  const [firstnameError, setFirstnameError] = useState({
    boolean: false,
    message: "",
  });

  const [emailError, setEmailError] = useState({
    boolean: false,
    message: "",
  });
  const [pwError, setPwError] = useState({
    boolean: false,
    message: "",
  });
  const [pseudoError, setPseudoError] = useState({
    boolean: false,
    message: "",
  });
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";
  const objTxt = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError({
        boolean: true,
        message: lang === "fr" ? "Adresse e-mail invalide" : "Invalid email",
      });
      return;
    }
    if (!validatePseudo(pseudo)) {
      setPseudoError({
        boolean: true,
        message: lang === "fr" ? "Pseudo invalide" : "Invalid pseudo",
      });
      return;
    }
    if (!validatePassword(password)) {
      setPwError({
        boolean: true,
        message:
          lang === "fr" ? "Mot de passe trop court" : "Password too short",
      });
      return;
    }
    axiosServices.post("/register", {
      email: email,
      password: password,
      firstname: firstname,
      surname: surname,
      pseudo: pseudo,
    });
  };

  return (
    <section className="register">
      <section>
        <header>
          <h1>{objTxt.registeraccount}</h1>
        </header>
        <main>
          <form onSubmit={handleRegister}>
            <section>
              <label htmlFor="firstname">{objTxt.enterfirstname}</label>
              <input
                type="text"
                id="firstname"
                required
                placeholder={objTxt.firstname}
                onChange={(e) => {
                  if (e.target.value.length <= 2 && !firstnameError.boolean) {
                    setFirstnameError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Prénom trop court"
                          : "Firstname is too short",
                    });
                  } else if (
                    e.target.value.length > 2 &&
                    firstnameError.boolean
                  ) {
                    setFirstnameError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setFirstname(e.target.value);
                }}
              />
              {firstnameError.boolean && (
                <p className="error">{firstnameError.message}</p>
              )}
            </section>
            <section>
              <label htmlFor="surname">{objTxt.entersurname}</label>
              <input
                type="text"
                id="surname"
                required
                placeholder={objTxt.surname}
                onChange={(e) => {
                  if (e.target.value.length <= 2 && !surnameError.boolean) {
                    setSurnameError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Nom trop court"
                          : "Surname is too short",
                    });
                  } else if (
                    e.target.value.length > 2 &&
                    surnameError.boolean
                  ) {
                    setSurnameError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setSurname(e.target.value);
                }}
              />
              {surnameError.boolean && (
                <p className="error">{surnameError.message}</p>
              )}
            </section>
            <section>
              <label htmlFor="pseudo">{objTxt.enterpseudo}</label>
              <input
                type="text"
                id="pseudo"
                required
                placeholder="Pseudo"
                onChange={(e) => {
                  if (!validatePseudo(e.target.value) && !pseudoError.boolean) {
                    setPseudoError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Pseudo trop court"
                          : "Pseudo is too short",
                    });
                  } else if (
                    validatePseudo(e.target.value) &&
                    pseudoError.boolean
                  ) {
                    setPseudoError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setPseudo(e.target.value);
                }}
              />
              {pseudoError.boolean && (
                <p className="error">{pseudoError.message}</p>
              )}
            </section>{" "}
            <section>
              <label htmlFor="email">{objTxt.enteremail}</label>
              <input
                type="email"
                id="email"
                required
                placeholder={objTxt.email}
                onChange={(e) => {
                  if (!validateEmail(e.target.value) && !emailError.boolean) {
                    setEmailError({
                      boolean: true,
                      message:
                        lang === "fr"
                          ? "Adresse e-mail invalide"
                          : "Invalid email",
                    });
                  } else if (
                    validateEmail(e.target.value) &&
                    emailError.boolean
                  ) {
                    setEmailError({
                      boolean: false,
                      message: "",
                    });
                  }
                  setEmail(e.target.value);
                }}
              />
              {emailError.boolean && (
                <p className="error">{emailError.message}</p>
              )}
            </section>{" "}
            <section>
              <label htmlFor="password">{objTxt.enterpassword}</label>
              <input
                type="password"
                id="password"
                required
                placeholder={objTxt.password}
                onChange={(e) => {
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
              {pwError.boolean && <p className="error">{pwError.message}</p>}
            </section>{" "}
            <input type="submit" value="M'enregistrer" />
          </form>
        </main>
      </section>
    </section>
  );
};
