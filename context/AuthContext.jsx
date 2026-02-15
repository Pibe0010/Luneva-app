import { router } from "expo-router";
import { createContext, useEffect, useState } from "react";
import supabase from "../supabase/Supabase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    router.replace("/(tabs)");
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        session,
        authenticated: !!session,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
