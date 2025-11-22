import { MaterialIcons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import Styled from "styled-components/native";
import { GradientComponent } from "../../components/gradient/GradientComponent.jsx";
import { InputRegister } from "../../components/register/InpustRegister.jsx";
import { fetchRegisterUser } from "../../hooks/Register.js";

export default function Index() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [successLoading, setSuccessLoading] = useState(false);

  const {
    mutate: register,
    data,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: () => fetchRegisterUser(name, lastName, email, pass),

    onSuccess: (result) => {
      setSuccessLoading(true);

      setTimeout(() => {
        router.push("/login");
      }, 1700);
    },

    isError: () => {
      setSuccessLoading(false);
    },
  });

  if (successLoading) {
    return (
      <SuccessContainer>
        <ActivityIndicator size="large" color="#8e0ff6" />
        <SuccessText>User Registered Successfully</SuccessText>
      </SuccessContainer>
    );
  }

  return (
    <Container>
      <LoginContainer>
        <GradientComponent />
        <IconBack onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
        </IconBack>
        <Texto>User Register</Texto>
        <InputRegister
          name={name}
          setName={setName}
          lastName={lastName}
          setlastName={setlastName}
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
        />
        <ButtonLogContainer>
          <ButtonRegister onPress={() => register()}>
            <RegisterText>Register</RegisterText>
          </ButtonRegister>
        </ButtonLogContainer>
        {isError && <ErrorText>{error.message}</ErrorText>}
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
    bottom: 50px; 
`;
const ButtonRegister = Styled.TouchableOpacity`
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
const RegisterText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
const ErrorText = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #aa0f0f;
    text-align: center;
    margin: 10px;
`;
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
