import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export const saveToken = async (token) => {
  await SecureStore.setItemAsync("token", JSON.stringify(token));
};

export const getToken = async () => {
  const token = await SecureStore.getItemAsync("token");

  return token ? JSON.parse(token) : null;
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

export const authFetch = async (url, options = {}) => {
  const session = await getToken();
  const accessToken = session?.session?.access_token;

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (res.status === 401) {
    await removeToken();
    router.replace("/login");
    throw new Error("Unauthorized");
  }

  return res;
};
