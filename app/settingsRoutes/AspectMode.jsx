import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import Styled from "styled-components/native";
import { ToggleSwitch } from "../../components/settingsComponent/Switch.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function AspectMode() {
  const { theme } = useTheme();

  useEffect(() => {
    NavigationBar.setButtonStyleAsync(theme === "dark" ? "light" : "dark");

    return () => {
      NavigationBar.setButtonStyleAsync("light");
    };
  }, [theme]);

  return (
    <Container style={globalStyles.container}>
      <ToggleSwitch />
      <TextSW>Modo dark</TextSW>
      <TextSW>Modo ligth</TextSW>
      <TextSW>Modo sistem</TextSW>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
    width: 100%;
`;
const TextSW = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 20px;
`;
