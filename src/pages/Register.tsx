import { useState } from "react";
import { axiosServices } from "../utils/axiosServices";
export const Register = () => {
  const [error, setError] = useState<{
    hasError: boolean;
    textError: string;
  }>({
    hasError: false,
    textError: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [pseudo, setPseudo] = useState("");

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
  return (
    <section>
      <header>
        <h2>Enregistrement de mon compte Imeji</h2>
      </header>
      <main>
        <form onSubmit={handleRegister}>
          <section>
            <input
              type='text'
              required
              placeholder='Entrez votre prénom'
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type='text'
              required
              placeholder='Entrez votre nom de famille'
              onChange={(e) => setSurname(e.target.value)}
            />
          </section>
          <section>
            <input
              type='text'
              required
              placeholder='Entrez votre pseudo'
              onChange={(e) => setPseudo(e.target.value)}
            />
            <input
              type='email'
              required
              placeholder='Entrez votre email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>{" "}
          <input
            type='password'
            required
            placeholder='Entrez votre mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type='submit' value="M'enregistrer" />
        </form>
      </main>
    </section>
  );
};
