import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "18c1d0b0-547a-48d2-a07d-eda060214d1f",
  },
});
