import Styled from "styled-components/native";

export default function settings() {
  return (
    <Container>
      <Texto>login, register, mode, logout</Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0f0e0e; 
`;
const Texto = Styled.Text`
  font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin: 20px;
`;
