import * as SecureStore from "expo-secure-store";
import React, { useState, createContext, useContext, useEffect } from "react";

import { useCommon } from "./commonProvider";
import { usePromiseHandler } from "../hooks";
import { signIn, signUp } from "../services/auth";
import { DropDownHolder } from "../components/atoms";
import { SignInParams, SignUpParams } from "../types";

interface AuthContextData {
  user: boolean;
  signed: boolean;
  authSignOut: () => void;
  authSignIn: (data: SignInParams) => void;
  authSignUp: (data: SignUpParams) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { setLoading } = useCommon();
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync("token");
      if (token) setUser(true);
      else setUser(false);
    }

    fetchToken();
  }, []);

  async function authSignIn(data: SignInParams) {
    setLoading(true);
    const [result, error] = await usePromiseHandler(signIn(data));
    if (!!error) {
      DropDownHolder.alert("error", "Erro: ", error.response.status);
      setLoading(false);
      return;
    } else {
      await SecureStore.setItemAsync("token", result.data.token);
      await setUser(true);
    }

    setLoading(false);
  }

  async function authSignUp(data: SignUpParams) {
    setLoading(true);
    const [result, error] = await usePromiseHandler(signUp(data));
    if (!!error) {
      console.log(error.response);
      DropDownHolder.alert("error", "Erro: ", error.response.status);
      setLoading(false);
      return;
    } else {
      DropDownHolder.alert("success", "Sucesso:", "Verifique seu email");
      await setUser(true);
    }

    setLoading(false);
  }

  async function authSignOut() {
    setLoading(true);

    await SecureStore.deleteItemAsync("token");
    await setUser(false);

    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, authSignIn, authSignUp, authSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
