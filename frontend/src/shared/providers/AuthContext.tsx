import { createContext, useState, ReactNode, useEffect } from "react";

import { LoginRequest, RegisterRequest } from "../api/auth/types";
import { login, register } from "../api/auth/api";
import { runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  isLoading: boolean;
  userToken: string;
  login: (loginRequest: LoginRequest) => Promise<void>;
  register: (registerRequest: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string>("");

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserToken(token);
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const loginAction = async (loginRequest: LoginRequest) => {
    try {
      const data = await login(loginRequest);
      await AsyncStorage.setItem("token", data);
      runInAction(() => {
        setUserToken(data);
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const registerAction = async (registerRequest: RegisterRequest) => {
    try {
      const data = await register(registerRequest);
      runInAction(() => {
        setUserToken(data);
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logoutAction = async () => {
    await AsyncStorage.removeItem("token");
    runInAction(() => {
      setUserToken("");
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        login: loginAction,
        register: registerAction,
        logout: logoutAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
