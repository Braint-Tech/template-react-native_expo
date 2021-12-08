import { req, queries } from "../services";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import React, { useState, createContext, useContext, useEffect } from "react";

import { useCommon } from "./common";
import { usePromiseHandler } from "../hooks";
import { DropDownHolder } from "../components/atoms";
import { SignInParams, SignUpParams } from "../types";

interface AuthContextData {
  signed: boolean;
  authSignOut: () => void;
  authSignIn: (data: SignInParams) => void;
  authSignUp: (data: SignUpParams) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { setLoading } = useCommon();
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync("token");
      if (token) setSigned(true);
      else setSigned(false);
      setTimeout(() => SplashScreen.hideAsync(), 250);
    }

    fetchToken();
  }, []);

  async function authSignIn(data: SignInParams) {
    setLoading(true);
    const [result, error] = await usePromiseHandler(req(queries().signIn, data), () =>
      setLoading(false)
    );

    if (!!error) {
      DropDownHolder.alert("error", "Erro: ", error.response.status);
      return;
    } else {
      console.log(result);
      DropDownHolder.alert("success", "Sucesso: ", "Mensagem");
      await SecureStore.setItemAsync("token", result.data.token);
      setSigned(true);
    }
  }

  async function authSignUp(data: SignUpParams) {
    setLoading(true);
    console.log(data);
    const [result, error] = await usePromiseHandler(req(queries().signUp, data), () =>
      setLoading(false)
    );

    if (!!error) {
      DropDownHolder.alert("error", "Erro: ", error.response.status);
      return;
    } else {
      console.log(result);
      DropDownHolder.alert("success", "Sucesso:", "Verifique seu email");

      setSigned(true);
    }
  }

  async function authSignOut() {
    setLoading(true);
    await SecureStore.deleteItemAsync("token");

    setSigned(false);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        authSignIn,
        authSignUp,
        authSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
