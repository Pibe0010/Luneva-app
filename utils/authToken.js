import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export const saveToken = async (token) => {
  await SecureStore.setItemAsync("token", token);
};

export const getToken = async () => {
  return await SecureStore.getItemAsync("token");
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

export const authFetch = async (url, options = {}) => {
  const token = await SecureStore.getItemAsync("token");

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (res.status === 401) {
    await SecureStore.deleteItemAsync("token");
    router.replace("/login");
    throw new Error("Unauthorized");
  }

  return res;
};
