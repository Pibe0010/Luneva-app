import { router, useSegments } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export function useProtectedRoute() {
  const { authenticated, loading } = useContext(AuthContext);
  const segments = useSegments(); // ruta actual

  useEffect(() => {
    if (loading) return;

    const isAuthRoute =
      segments[0] === "login" ||
      segments[0] === "register" ||
      segments[0] === "forgotPass";

    // Usuario NO logueado → bloquear tabs
    if (!authenticated && segments[0] === "(tabs)") {
      router.replace("/login");
    }

    // Usuario logueado → evitar retornar a login/register
    if (authenticated && isAuthRoute) {
      router.replace("/(tabs)");
    }
  }, [segments, authenticated, loading]);
}
