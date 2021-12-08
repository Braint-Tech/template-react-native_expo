import { QueryTypes } from "../types";

const queries = (id?: number, extra?: string): QueryTypes => {
  return {
    signUp: { type: "post", route: "signup/" },
    signIn: { type: "post", route: "signin/" },
    example: { type: "post", route: "example/" },
    exampleParams: { type: "get", route: `exmaple/${id}/test/${extra}` },
  };
};

export default queries;
