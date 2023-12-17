import { useState } from "react";
import { axiosServices } from "../utils/axiosServices";
import * as obj from "../utils/Text";
import "../styles/Register.css";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [pseudo, setPseudo] = useState("");
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
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("logs : ", email, password, firstname, surname, pseudo);
    axiosServices.post("/register", {
      email: email,
      password: password,
      firstname: firstname,
      surname: surname,
      pseudo: pseudo,
    });
  };
  const lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";
  const objTxt = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
  return (
    <section className="register">
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
              onChange={(e) => setFirstname(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="surname">{objTxt.enterfirstname}</label>
            <input
              type="text"
              id="surname"
              required
              placeholder={objTxt.entersurname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="pseudo">{objTxt.enterpseudo}</label>
            <input
              type="text"
              id="pseudo"
              required
              placeholder="Pseudo"
              onChange={(e) => setPseudo(e.target.value)}
            />
          </section>{" "}
          <section>
            <label htmlFor="email">{objTxt.enteremail}</label>
            <input
              type="email"
              id="email"
              required
              placeholder={objTxt.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>{" "}
          <section>
            <label htmlFor="password">{objTxt.enterpassword}</label>
            <input
              type="password"
              id="password"
              required
              placeholder={objTxt.enterpassword}
              onChange={(e) => {
                if (e.target.value.length < 8 && !pwError.boolean) {
                  setPwError({
                    boolean: true,
                    message:
                      lang === "fr"
                        ? "Mot de passe trop court"
                        : "Password too short",
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
  );
};
