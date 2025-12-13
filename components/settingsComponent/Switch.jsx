import { Switch } from "react-native";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";

export const ToggleSwitch = () => {
  const { mode, setMode, theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Container>
      <TextMode>
        {mode === "system" ? "System mode" : isDark ? "Dark mode" : "Light mode"}
      </TextMode>
      <Switch
        value={isDark}
        disabled={mode === "system"}
        onValueChange={(value) => {
          setMode(value ? "dark" : "light");
        }}
        trackColor={{ false: "#767577", true: "#c1c0c3" }}
        thumbColor={isDark ? "#7d0ff3" : "#6135aa"}
      />
    </Container>
  );
};

const Container = Styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-vertical: 40px;
  background-color: ${({ theme }) => theme.backgroundSwitch};
`;
const TextMode = Styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;
