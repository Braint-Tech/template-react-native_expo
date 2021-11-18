import http from "./httpCommon";
import { SignInParams, SignUpParams } from "../types";

export async function signIn(data: SignInParams) {
  return http.post("api-token-auth/", JSON.stringify(data));
}

export async function signUp(data: SignUpParams) {
  return http.post("create_user/", JSON.stringify(data));
}
