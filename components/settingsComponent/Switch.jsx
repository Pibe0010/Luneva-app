import { Switch } from "react-native";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";

export const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <TextMode>{theme === "dark" ? "Dark mode" : "Light mode"}</TextMode>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        value={theme === "dark"}
        onValueChange={toggleTheme}
      />
    </Container>
  );
};

const Container = Styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin: 40px 0;
  background-color: rgba(242, 241, 241, 0.3);
`;
const TextMode = Styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
