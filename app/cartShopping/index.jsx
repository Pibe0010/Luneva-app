import Styled from "styled-components/native";

export default function Cart() {
  return (
    <Container>
      <Texto>cart</Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0f0e0e; 
`;
const Texto = Styled.Text``;
