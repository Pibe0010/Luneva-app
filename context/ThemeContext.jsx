import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

const STORAGE_KEY = "APP_THEME";

export const ThemeProvider = ({ children }) => {
  const systemTheme = Appearance.getColorScheme();
  const [mode, setMode] = useState("system");

  const resolvedTheme = mode === "system" ? systemTheme : mode;

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setMode(stored);
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const sub = Appearance.addChangeListener(() => {
      if (mode === "system") {
        // fuerza re-render
        setMode("system");
      }
    });

    return () => sub.remove();
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: resolvedTheme,
        setMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
