import axios from "axios";

console.log("token :", localStorage.getItem("auth-token"));

export const axiosServices = axios.create({
  baseURL: "http://localhost:8000/api",
  //withCredentials: true,
  headers: {
    common: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    },
  },
});
