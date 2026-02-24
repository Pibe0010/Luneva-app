import Styled from "styled-components/native";

export const InputsAccount = ({
  name,
  setName,
  lastName,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
}) => {
  return (
    <>
      <InputName
        placeholder="Name"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setName}
        value={name}
      />
      <InputLastName
        placeholder="Last name"
        placeholderTextColor="#ffffff"
        keyboardType="name-phone-pad"
        autoCapitalize="none"
        onChangeText={setLastName}
        value={lastName}
      />
      <InputEmail
        placeholder="E-mail"
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <InputPhone
        placeholder="Phone"
        placeholderTextColor="#ffffff"
        keyboardType="phone-pad"
        autoCapitalize="none"
        onChangeText={setPhone}
        value={phone}
      />
    </>
  );
};

const InputName = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 29px;
`;
const InputLastName = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 29px;
`;
const InputEmail = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 29px;
`;
const InputPhone = Styled.TextInput`
    width: 97%;
    height: 50px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
    margin: 29px;
`;
