import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";

export const Icon = ({ name, size }) => {
  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  return (
    <CloseContainer>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons name={name} size={size} color={iconModeColor} />
      </TouchableOpacity>
    </CloseContainer>
  );
};

const CloseContainer = Styled.View`
    position: absolute;
    top: 60px;
    right: 20px;
`;
