import AntDesign from "@expo/vector-icons/AntDesign";
import Styled from "styled-components/native";

export function GoogleRegister() {
  return (
    <SingInGoogle>
      <ButtonGoogle>
        <AntDesign name="google-plus" size={30} color="#ffffff" />
      </ButtonGoogle>
      <GoogleText> Sign in with Google</GoogleText>
    </SingInGoogle>
  );
}

const SingInGoogle = Styled.TouchableOpacity`
    border: 2px solid #ffffff;
    border-radius: 10px;
    width: 90%;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;
const ButtonGoogle = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
const GoogleText = Styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
