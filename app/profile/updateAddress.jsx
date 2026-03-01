import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import Styled from "styled-components/native";
import { InputsAddress } from "../../components/Profile/UpdateAddress/InputsAddress.jsx";
import { updateAddress } from "../../hooks/Address.js";

export default function UpdateAddress() {
  const [address, setAddress] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [ladder, setLadder] = useState("");
  const [door, setDoor] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [successLoading, setSuccessLoading] = useState(false);

  const queryClient = useQueryClient();

  const {
    mutate: update,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: () =>
      updateAddress({
        address,
        streetNumber,
        floor,
        ladder,
        door,
        city,
        country,
        postalCode,
      }),

    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["address"] });
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
      <InputsAddress
        street={address}
        setStreet={setAddress}
        streetNumber={streetNumber}
        setStreetNumber={setStreetNumber}
        floor={floor}
        setFloor={setFloor}
        ladder={ladder}
        setLadder={setLadder}
        door={door}
        setDoor={setDoor}
        city={city}
        setCity={setCity}
        country={country}
        setCountry={setCountry}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
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
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80%;
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
