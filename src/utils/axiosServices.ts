import axios from "axios";

export const axiosServices = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    common: {
      Accept: "application/json",
    },
  },
});
