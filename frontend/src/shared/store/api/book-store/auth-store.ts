import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import {
  LoginRequest,
  RegisterRequest,
  TokenData,
} from "../../../api/auth/types";
import { action, makeAutoObservable, runInAction } from "mobx";
import { login, register } from "../../../api/auth/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  checkToken() {
    throw new Error("Method not implemented.");
  }
  token = "";

  constructor() {
    makeAutoObservable(this);
  }

  loginAction = async (loginRequest: LoginRequest) => {
    try {
      const data = await login(loginRequest);
      await AsyncStorage.setItem("token", data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  registerAction = async (registerRequest: RegisterRequest) => {
    try {
      const data = await register(registerRequest);
      runInAction(() => {
        this.token = data;
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  logoutAction = async () => {
    await AsyncStorage.removeItem("token");
  };
  checkAuth = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };
}

export const authStore = new AuthStore();
