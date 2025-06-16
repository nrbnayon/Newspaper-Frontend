import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4500/api";
const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("AXIOS API Request From Backend:::", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
