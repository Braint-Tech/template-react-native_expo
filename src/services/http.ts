import axios from "axios";
import { QueryParams } from "../types";

const http = axios.create({
  // TODO: Change API default URL
  baseURL: "https://api.example.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const req = async (query: QueryParams, data?: any) => {
  if (query.type === "put") return http.put(query.route, data);
  if (query.type === "post") return http.post(query.route, data);
  if (query.type === "patch") return http.patch(query.route, data);
  if (query.type === "get") return http.get(query.route, { params: data });
};

export default req;
