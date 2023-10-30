import axios from "axios";
import React, { useState } from "react";
import { axiosServices } from "../utils/axiosServices";
import { login } from "../utils/API";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logs : ", email, password);
    login(email, password);
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
