import axios from "axios";
import React, { useState } from "react";
import { axiosServices } from "../utils/axiosServices";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logs : ", email, password);
    return axiosServices
      .post("/login", {
        email,
        password,
      })
      .then((res) => console.log("response : ", res));
  };

  return (
    <main>
      <form onSubmit={handleLogin}>
        <input type='email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' onChange={(e) => setPassword(e.target.value)} />

        <input type='submit' />
      </form>
    </main>
  );
};
