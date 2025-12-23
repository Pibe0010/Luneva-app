import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");

  if (token && typeof token === "string") {
    config.headers.Authorization = `${token.trim()}`;
  }

  return config;
});

export default api;
