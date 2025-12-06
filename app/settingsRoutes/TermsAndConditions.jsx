import Styled from "styled-components/native";

export default function TermsAndConditions() {
  return (
    <Container>
      <Texto>notis</Texto>
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
    color: #ffffff;
`;
