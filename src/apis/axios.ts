import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
