import Styled from "styled-components/native";

export function InputLogin({ email, setEmail, pass, setPass }) {
  return (
    <Inputcontainer>
      <InputText
        placeholder="E-mail"
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <InputPass
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
        onChangeText={setPass}
        value={pass}
      />
    </Inputcontainer>
  );
}

const Inputcontainer = Styled.View`
    flex: 1;
    margin: 0 20px;
`;
const InputText = Styled.TextInput`
    width: 100%;
    height: 50px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    margin: 30px 0;
    color: #ffffff;
`;
const InputPass = Styled.TextInput`
    width: 100%;
    height: 50px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    color: #ffffff;
`;
