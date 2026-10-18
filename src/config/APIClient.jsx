import axios from "axios";

const APIClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

APIClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("Request URL:", config.url);
    console.log("Token tersedia:", Boolean(token));
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

APIClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default APIClient;
