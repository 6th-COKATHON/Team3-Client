import axios from "axios";
import { BASE_URL } from "@/api/urls";

// 인증 필요 x
export const publicAxios = axios.create({
  baseURL: BASE_URL,
});

// 인증 필요 o
export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
