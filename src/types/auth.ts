export interface SignInParams {
  username: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  last_name: string;
  first_name: string;
  passwordCheck?: string;
}
