import { router } from "expo-router";
import Styled from "styled-components/native";

export function ButtonRegister() {
  return (
    <ButtonRegisContainer>
      <TextRgister>Don`t have an account ?</TextRgister>
      <ButtonTouchRegister
        onPress={() => {
          router.push("/register");
        }}
      >
        <ButtonText>Sing up</ButtonText>
      </ButtonTouchRegister>
    </ButtonRegisContainer>
  );
}

const ButtonRegisContainer = Styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    position: absolute;
    bottom: 170px;
`;
const TextRgister = Styled.Text`
    flex:1;
    alint-item: center;
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
    margin-left: 25px;
    margin-top: 2px;  
`;
const ButtonTouchRegister = Styled.TouchableOpacity` 
`;
const ButtonText = Styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #fbfbfb;
    margin-right: 140px;
`;
