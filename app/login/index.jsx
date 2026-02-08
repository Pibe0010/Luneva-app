import { MaterialIcons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useContext, useState } from "react";
import Styled from "styled-components/native";
import { GradientComponent } from "../../components/gradient/GradientComponent.jsx";
import { ButtonRegister } from "../../components/login/ButtonRegister.jsx";
import { GoogleRegister } from "../../components/login/GoogleRegister.jsx";
import { InputLogin } from "../../components/login/InputLogin.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { fetchLogin } from "../../hooks/Login.js";

export default function Index() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { login: loginContext } = useContext(AuthContext);

  const {
    mutate: login,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: () => fetchLogin(email, pass),

    onSuccess: async (token) => {
      loginContext(token);
    },
  });

  return (
    <Container>
      <LoginContainer>
        <GradientComponent />
        <IconBack onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
        </IconBack>
        <Texto>Welcome back</Texto>
        <InputLogin email={email} setEmail={setEmail} pass={pass} setPass={setPass} />
        <ButtonLogContainer>
          <ButtonForgot
            onPress={() => {
              router.push("/forgotPass");
            }}
          >
            <ForgotText>Forgot Password ?</ForgotText>
          </ButtonForgot>
          <ButtonLogIn disabled={isLoading} onPress={() => login()}>
            <LogText>Sing in</LogText>
          </ButtonLogIn>
        </ButtonLogContainer>
        <ButtonRegister />
        <GoogleContainer>
          <GoogleRegister />
        </GoogleContainer>
        {isError && <ErrorText>Failed to login try again</ErrorText>}
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
const GoogleContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-bottom: 1px;
    position: absolute;
    bottom: 80px;
`;
const ErrorText = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #aa0f0f;
    text-align: center;
    margin: 10px;
`;
