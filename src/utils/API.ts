import axios from "axios";
import { axiosServices } from "./axiosServices";

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
    localStorage.setItem("auth-token", token);
    return response;
  } catch (err) {
    console.log("err while logging in :", err);
  }
};

export const logout = async () => {
  const response = await axiosServices.post("/logout");
  localStorage.removeItem("auth-token");
  return response;
};
