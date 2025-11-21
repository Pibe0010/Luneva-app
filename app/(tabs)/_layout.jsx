import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Styled from "styled-components/native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#b9acea",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#7507f3",
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "600",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconContainer>
              <MaterialIcons name="cottage" size={30} color={color} />
            </IconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Offers",
          tabBarIcon: ({ color }) => (
            <IconContainer>
              <MaterialIcons name="local-offer" size={30} color={color} />
            </IconContainer>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconContainer>
              <MaterialIcons name="account-circle" size={30} color={color} />
            </IconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <IconContainer>
              <MaterialIcons name="shopping-cart" size={30} color={color} />
            </IconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconContainer>
              <MaterialIcons name="settings" size={30} color={color} />
            </IconContainer>
          ),
        }}
      />
    </Tabs>
  );
}

const IconContainer = Styled.View`
  align-items: center;
  justify-content: center;
`;
