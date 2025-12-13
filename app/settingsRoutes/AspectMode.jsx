import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import Styled from "styled-components/native";
import { RadioOption } from "../../components/settingsComponent/RadioButton.jsx";
import { ToggleSwitch } from "../../components/settingsComponent/Switch.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function AspectMode() {
  const { mode, setMode, theme } = useTheme();

  useEffect(() => {
    NavigationBar.setButtonStyleAsync(theme === "dark" ? "light" : "dark");

    return () => {
      NavigationBar.setButtonStyleAsync("light");
    };
  }, [theme]);

  return (
    <Container style={globalStyles.container}>
      <ToggleSwitch />
      <RadioOption
        label="Dark mode"
        value="dark"
        selected={mode === "dark"}
        onSelect={setMode}
      />

      <RadioOption
        label="Light mode"
        value="light"
        selected={mode === "light"}
        onSelect={setMode}
      />

      <RadioOption
        label="System mode"
        value="system"
        selected={mode === "system"}
        onSelect={setMode}
      />
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
    width: 100%;
    padding: 5px;
`;
