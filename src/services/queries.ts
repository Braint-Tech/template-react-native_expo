import { QueryTypes } from "../types";

const queries = (id?: number, extra?: string): QueryTypes => {
  return {
    example: { type: "post", route: "example/" },
    exampleParams: { type: "get", route: `exmaple/${id}/test/${extra}` },
  };
};

export default queries;
