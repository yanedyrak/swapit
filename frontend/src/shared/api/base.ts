import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";

function createInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {},
  });
  instance.interceptors.request.use(
    (config) => {
      const token = AsyncStorage.getItem("token");
      if (token && config.url && !config.url.includes("auth")) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return instance;
}

export const baseInstance = createInstance();
