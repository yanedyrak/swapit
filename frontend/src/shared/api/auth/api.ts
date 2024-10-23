import { baseInstance } from "../base";
import { LoginRequest, RegisterRequest } from "./types";

export const login = async (LoginRequest: LoginRequest) => {
  const { data } = await baseInstance.post<{ token: string }>(
    "/auth/login",
    LoginRequest
  );
  return data.token;
};

export const register = async (registerRequest: RegisterRequest) => {
  const { data } = await baseInstance.post("/auth/register", registerRequest);
  return data.token;
};
