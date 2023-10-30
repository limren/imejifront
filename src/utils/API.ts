import axios from "axios";
import { axiosServices } from "./axiosServices";

// export const setCookie = async () => {
//   const response = await axios.get("http://localhost:8000/sanctum/csrf-cookie");
//   console.log("response : ", response);
// };

export const getUser = async () => {
  try {
    const res = await axiosServices.get("/user");
    return res.data;
  } catch (err) {
    console.log("err while getting user :", err);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosServices.post("/login", {
      email,
      password,
    });
    const token = response.data.token;
    console.log("res from logging in : ", response.data);
    localStorage.setItem("auth-token", token);
    return response.data;
  } catch (err) {
    console.log("err while logging in :", err);
  }
};

export const logout = async () => {
  const response = await axiosServices.post("/logout");
  localStorage.removeItem("auth-token");
  console.log("Response from logout : ", response);
  return response;
};
