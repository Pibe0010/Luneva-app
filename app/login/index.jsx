import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Styled from "styled-components/native";
import { GoogleRegister } from "../../components/login/GoogleRegister.jsx";
import { InputLogin } from "../../components/login/InputLogin.jsx";

export default function Index() {
  return (
    <Container>
      <LoginContainer>
        <LinearGradient
          colors={["rgb(36, 36, 36)", "rgb(115, 26, 205)", "rgb(36, 36, 36)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
            borderRadius: 20,
          }}
        />
        <IconBack onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
        </IconBack>
        <Texto>Welcome back</Texto>
        <InputLogin />
        <ButtonLogContainer>
          <ButtonForgot
            onPress={() => {
              router.push("/forgotPass");
            }}
          >
            <ForgotText>Forgot Password ?</ForgotText>
          </ButtonForgot>
          <ButtonLogIn>
            <LogText>Sing in</LogText>
          </ButtonLogIn>
        </ButtonLogContainer>
        <ButtonRegisContainer>
          <TextRgister>Don`t have an account ?</TextRgister>
          <ButtonRegister
            onPress={() => {
              router.push("/register");
            }}
          >
            <ButtonText>Sing up</ButtonText>
          </ButtonRegister>
        </ButtonRegisContainer>
        <GoogleContainer>
          <GoogleRegister />
        </GoogleContainer>
      </LoginContainer>
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
const LoginContainer = Styled.View`
    flex: 1;
    flex-direction: column;
    border: 1px solid #ffffff;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin: 100px;
    position: relative;
`;
const IconBack = Styled.TouchableOpacity`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 10px;
`;
const Texto = Styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin: 20px;
    margin-top: 50px;
`;
const ButtonLogContainer = Styled.View`
    flex: 1;
    width: 100%;
    flex-direction: column;
    position: absolute;
    bottom: 210px; 
`;
const ButtonLogIn = Styled.TouchableOpacity`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin: 15px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    background-color: rgb(22, 4, 38);
`;
const LogText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
const ButtonForgot = Styled.TouchableOpacity`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
    text-align: right;
    margin: 20px;
`;
const ForgotText = Styled.Text`
    font-size: 12px;  
    font-weight: bold;
    color: #ffffff;
    text-align: right;
`;
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
const ButtonRegister = Styled.TouchableOpacity` 
`;
const ButtonText = Styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #fbfbfb;
    margin-right: 140px;
`;
const GoogleContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-bottom: 1px;
    position: absolute;
    bottom: 80px;
`;
