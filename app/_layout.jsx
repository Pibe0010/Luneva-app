import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { Splash } from "../components/loading/Splash.jsx";
import { Toast } from "../components/ToastAlert/Toast.jsx";
import AuthProvider, { AuthContext } from "../context/AuthContext.jsx";
import { ThemeProvider, useTheme } from "../context/ThemeContext.jsx";
import { ToastProvider } from "../context/ToastContext.jsx";
import { useProtectedRoute } from "../middleware/useProtectedRoute.js";
import { Mode } from "../style/theme.jsx";
const queryClient = new QueryClient();

function ProtectedLayout() {
  useProtectedRoute();
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="cartShopping" />
        <Stack.Screen name="searchProductActive" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="forgotPass" />
      </Stack>
    </>
  );
}

function LayoutWithLoading() {
  const { loading } = useContext(AuthContext);

  if (loading) return <Splash />;

  return <ProtectedLayout />;
}

function AppThemeWrapper({ children }) {
  const { theme } = useTheme();
  return <StyledThemeProvider theme={Mode[theme]}>{children}</StyledThemeProvider>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AppThemeWrapper>
            <ToastProvider>
              <Toast />
              <LayoutWithLoading />
            </ToastProvider>
          </AppThemeWrapper>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
