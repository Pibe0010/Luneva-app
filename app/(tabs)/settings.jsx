import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Styled from "styled-components";
import { Header } from "../../components/header/Header.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Settings() {
  const dataSettings = [
    { id: 1, name: "Aspect mode", route: "AspectMode", icon: "dark-mode" },
    { id: 2, name: "Notifications", route: "Notifications", icon: "notifications" },
    { id: 3, name: "About shop", route: "AboutShop", icon: "roundabout-right" },
    { id: 4, name: "Customer services", route: "CustomerServices", icon: "info-outline" },
    { id: 5, name: "Shipments info", route: "Shipments", icon: "local-shipping" },
    {
      id: 6,
      name: "Terms and conditions",
      route: "TermsAndConditions",
      icon: "event-note",
    },
    { id: 7, name: "Contact support", route: "ContactSupport", icon: "contact-support" },
  ];

  return (
    <Container style={globalStyles.container}>
      <Header />
      <ButtonContainer>
        {dataSettings.map((item) => (
          <Button
            key={item.id}
            onPress={() => router.push(`/settingsRoutes/${item.route}`)}
          >
            <MaterialIcons name={item.icon} size={30} color="#ffffff" />
            <Texto>{item.name}</Texto>
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
}

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0f0e0e;
  width: 100%;
`;
const Texto = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
const ButtonContainer = Styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;
const Button = Styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 20px;
  width: 100%;
  padding: 10px;
`;
