import axios, { AxiosInstance } from "axios";

function createInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {},
  });
  instance.interceptors.response.use(
    (config) => {
      console.log(config);
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
