import axios from "axios";

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

axiosServices.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
