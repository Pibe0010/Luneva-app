import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { ActivityIndicator, ScrollView } from "react-native";
import Styled from "styled-components/native";
import { fetchAddress } from "../../hooks/Address.js";
import { fetchProfile } from "../../hooks/Profile.js";

export const CardProfile = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  const { data: address = [] } = useQuery({
    queryKey: ["address"],
    queryFn: () => fetchAddress(),
  });

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator size="large" color="#5e06af" />
      </Container>
    );

  if (isError) return <ErrorText>Error: {error.message}</ErrorText>;

  return (
    <Container>
      <ScrollView>
        <TextTitle>Account</TextTitle>
        <Account>
          <TextName>Name: {data.user_name}</TextName>
          <LastName>Last Name: {data.last_name}</LastName>
          <Email>Email: {data.email}</Email>
          <Phone>Phone: {data.phone}</Phone>
          <UpdateAccount onPress={() => router.push("/profile/updateAccount")}>
            <UpdateText>Update account</UpdateText>
          </UpdateAccount>
        </Account>
        <TextTitle>Address</TextTitle>
        <Address>
          <AddressName>Street: {address.address} </AddressName>
          <AddressNumber>Street number: {address.street_number}</AddressNumber>
          <AddressFloor>Floor: {address.floor}</AddressFloor>
          <AddressLadder>Ladder: {address.ladder}</AddressLadder>
          <AddressDoor>Door: {address.door}</AddressDoor>
          <AddressCity>City: {address.city}</AddressCity>
          <AddressPostalCode>Postal Code: {address.postal_code}</AddressPostalCode>
          <AddressCountry>Country: {address.country}</AddressCountry>
          <UpdateAddress onPress={() => router.push("/profile/updateAddress")}>
            <UpdateText>Update address</UpdateText>
          </UpdateAddress>
        </Address>
        <Orders>
          <TextTitle>Orders</TextTitle>
          <RefOrder>Reference order: 123456789</RefOrder>
          <MyOrderProcess>Status order: In process</MyOrderProcess>
        </Orders>
      </ScrollView>
    </Container>
  );
};

const Container = Styled.View`
    flex: 1;
    margin: 10px;
    width: 100%; 
`;
const TextTitle = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;
const Account = Styled.View`
    flex-direction: column;
    background-color: #181818;
    border-radius: 10px;
    padding: 10px;
    border-radius: 10px;
`;
const TextName = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const UpdateAccount = Styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #5e06af;
    border-radius: 10px;
    margin: 20px;
    width: 90%;
`;
const UpdateText = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin: 10px;
`;
const LastName = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const Email = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const Phone = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const Address = Styled.View`
    flex-direction: column;
    background-color: #181818;
    border-radius: 10px;
    padding: 10px;
    border-radius: 10px;
`;
const AddressName = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressNumber = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;;
    color: ${({ theme }) => theme.text};
`;
const UpdateAddress = Styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #5e06af;
    border-radius: 10px;
    margin: 20px;
    width: 90%;
`;
const AddressFloor = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressLadder = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressDoor = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressCity = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressPostalCode = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const AddressCountry = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const Orders = Styled.View`
    flex-direction: column;
    background-color: #181818;
    border-radius: 10px;
    padding: 10px;
    border-radius: 10px;
`;
const RefOrder = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const MyOrderProcess = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
`;
const ErrorText = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
