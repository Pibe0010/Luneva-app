import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useContext } from "react";
import { Splash } from "../components/loading/Splash.jsx";
import AuthProvider, { AuthContext } from "../context/AuthContext.jsx";
import { useProtectedRoute } from "../middleware/useProtectedRoute.js";
const queryClient = new QueryClient();

function ProtectedLayout() {
  useProtectedRoute(); // ⬅️ Protege rutas automáticamente

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="cartShopping" />
      <Stack.Screen name="searchProductActive" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="forgotPass" />
    </Stack>
  );
}

function LayoutWithLoading() {
  const { loading } = useContext(AuthContext);

  if (loading) return <Splash />;

  return <ProtectedLayout />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <LayoutWithLoading />
      </QueryClientProvider>
    </AuthProvider>
  );
}
