import { ActivityIndicator } from "react-native";
import Styled from "styled-components/native";

export function Splash() {
  return (
    <SuccessContainer>
      <ActivityIndicator size="large" color="#8e0ff6" />
      <SuccessText>Checking credentials...</SuccessText>
    </SuccessContainer>
  );
}

const SuccessContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0f0e0e;
`;
const SuccessText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin: 10px;
`;
