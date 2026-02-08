import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function loadSession() {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        setAuthenticated(true);
      }

      setLoading(false);
    }

    loadSession();
  }, []);

  const login = async (token) => {
    await SecureStore.setItemAsync("token", JSON.stringify(token));
    setAuthenticated(true);
    router.replace("/(tabs)");
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setAuthenticated(false);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ loading, authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
