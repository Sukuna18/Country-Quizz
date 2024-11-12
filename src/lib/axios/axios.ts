import axios from "axios";
import { API_URL } from "../../constants/api";

export const myAxios = () => {
  return axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
