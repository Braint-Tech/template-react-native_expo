export interface QueryParams {
  type: string;
  route: string;
}

export interface QueryTypes {
  signUp: QueryParams;
  signIn: QueryParams;
  example: QueryParams;
  exampleParams: QueryParams;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}
