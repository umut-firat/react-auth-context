import axios from "axios";
import { enqueueSnackbar } from "notistack";

import { router } from "@/router";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

service.interceptors.request.use((config) => {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

service.interceptors.response.use((error) => {
  if (error.status === 401) {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_KEY);
    enqueueSnackbar("Invalid credentials.", { variant: "error" });
    router.navigate("/login", { replace: true });
  }
  return Promise.reject(error);
});

export { service };
