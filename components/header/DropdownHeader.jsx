import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useRef, useState } from "react";
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import Styled from "styled-components/native";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { fetchLogout } from "../../hooks/Logout.js";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SideMenu() {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-200)).current;

  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  const { logout: logoutContext } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await fetchLogout();
    } catch (e) {
      console.log(e, "error en logout");
    } finally {
      logoutContext();
    }
  };

  const openMenu = () => {
    setVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setVisible(false);
    });
  };

  const toggleMenu = () => {
    if (visible) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <Wrapper>
      <TouchableOpacity style={{ zIndex: 9999 }} onPress={toggleMenu}>
        <MaterialIcons name="more-vert" size={30} color="#ffffff" />
      </TouchableOpacity>

      {visible && <Overlay activeOpacity={1} onPress={closeMenu} />}

      <AnimatedMenu style={{ right: slideAnim }}>
        <Option onPress={() => router.push("/login")}>
          <OptionText>Login</OptionText>
          <IconContainer>
            <MaterialIcons name="login" size={25} color={iconModeColor} />
          </IconContainer>
        </Option>
        <Option onPress={() => router.push("/register")}>
          <OptionText>Register</OptionText>
          <IconContainer>
            <MaterialIcons name="account-box" size={25} color={iconModeColor} />
          </IconContainer>
        </Option>
        <Option onPress={handleLogout}>
          <OptionText>Logout</OptionText>
          <IconContainer>
            <MaterialIcons name="logout" size={25} color={iconModeColor} />
          </IconContainer>
        </Option>
      </AnimatedMenu>
    </Wrapper>
  );
}

const Wrapper = Styled.View`
  position: relative;
`;
const Overlay = Styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: ${SCREEN_WIDTH}px;
  height: 2000px;
  z-index: 1;
`;
const AnimatedMenu = Styled(Animated.View)`
  position: absolute;
  top: 55px;
  width: 130px;
  padding: 15px;
  background-color: ${({ theme }) => theme.Background};
  border-radius: 12px;
  z-index: 10;
  elevation: 8;
  border: 1px solid #6804ff;
`;
const Option = Styled.TouchableOpacity`
  padding: 5px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;
const OptionText = Styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
const IconContainer = Styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -5px;
`;
