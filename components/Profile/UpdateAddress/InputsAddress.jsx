import Styled from "styled-components/native";

export const InputsAddress = ({
  street,
  setStreet,
  streetNumber,
  setStreetNumber,
  floor,
  setFloor,
  ladder,
  setLadder,
  door,
  setDoor,
  city,
  setCity,
  country,
  setCountry,
  postalCode,
  setPostalCode,
}) => {
  return (
    <>
      <InputStreet
        placeholder="Street"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setStreet}
        value={street}
      />
      <InputStreetNumber
        placeholder="Street number"
        placeholderTextColor="#ffffff"
        keyboardType="numeric"
        autoCapitalize="none"
        onChangeText={setStreetNumber}
        value={streetNumber}
      />
      <InputFloor
        placeholder="Floor"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setFloor}
        value={floor}
      />
      <InputLadder
        placeholder="Ladder"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setLadder}
        value={ladder}
      />
      <InputDoor
        placeholder="Door"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setDoor}
        value={door}
      />
      <InputCity
        placeholder="City"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setCity}
        value={city}
      />
      <InputCountry
        placeholder="Country"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setCountry}
        value={country}
      />
      <InputPostal
        placeholder="Postal code"
        placeholderTextColor="#ffffff"
        keyboardType="numeric"
        autoCapitalize="none"
        onChangeText={setPostalCode}
        value={postalCode}
      />
    </>
  );
};

const InputStreet = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputStreetNumber = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputFloor = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputLadder = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputDoor = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputCity = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputCountry = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
const InputPostal = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 10px;
`;
