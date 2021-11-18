import axios from "axios";
import * as SecureStore from "expo-secure-store";

const token = SecureStore.getItemAsync("token");

export default axios.create({
  baseURL: "https://api.careceiver.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
