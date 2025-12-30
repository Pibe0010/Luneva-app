import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import Styled from "styled-components/native";
import { useToast } from "../../context/ToastContext.jsx";

export const Toast = () => {
  const { toast, hideToast } = useToast();
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!toast) return;

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: Platform.OS === "ios" ? 60 : 40,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -100,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => hideToast());
    }, 2000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  if (!toast) return null;

  return (
    <Container
      style={{
        transform: [{ translateY }],
        opacity,
      }}
      type={toast.type}
    >
      <MaterialIcons
        name={toast.type === "error" ? "error" : "check-circle"}
        size={24}
        color="#fff"
      />
      <Text>{toast.message}</Text>
    </Container>
  );
};

const Container = Styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 10px;
  right: 10px;
  z-index: 9999;
  elevation: 9999;
  background-color: ${({ type }) => (type === "error" ? "#E53935" : "#5b5b5b")};
  padding: 14px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Text = Styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
