import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import Styled from "styled-components/native";
import { InputsAccount } from "../../components/Profile/UpdateProfile/inputsAccount.jsx";
import { updateProfile } from "../../hooks/Profile.js";

export default function UpdateAccount() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [successLoading, setSuccessLoading] = useState(false);

  const queryClient = useQueryClient();

  const {
    mutate: update,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: () => updateProfile({ name, lastName, email, phone }),

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setSuccessLoading(true);
      setTimeout(() => {
        router.back();
      }, 1700);
    },

    onError: () => {
      setSuccessLoading(false);
    },
  });

  if (successLoading) {
    return (
      <SuccessContainer>
        <ActivityIndicator size="large" color="#8e0ff6" />
        <SuccessText>Updated successfully</SuccessText>
      </SuccessContainer>
    );
  }

  return (
    <Container>
      <Gradient colors={["rgba(73, 3, 147, 0.8)", "transparent"]} />
      <InputsAccount
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
      />
      <ButtomUpdateAccount disabled={isLoading} onPress={() => update()}>
        <TextButtom>Updated</TextButtom>
      </ButtomUpdateAccount>
      <ErrorUpdate>{isError && error.message}</ErrorUpdate>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
    width: 100%;
    position: relative;
`;
const Gradient = Styled(LinearGradient)`
    position: absolute;
    top: 125px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 70%;
    border-radius: 20px;
`;
const ButtomUpdateAccount = Styled.TouchableOpacity`
    margin: 30px 0;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    background-color: ${({ theme }) => theme.bgButtonForm};
`;
const TextButtom = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    justify-content: center;
    align-items: center;
`;
const ErrorUpdate = Styled.Text`  
    font-size: 16px;
    font-weight: bold;
    color: red;
    text-align: center;
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
