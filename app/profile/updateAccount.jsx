import Styled from "styled-components/native";

export default function UpdateAccount() {
  return (
    <Container>
      <Texto>updateAccount</Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
`;
const Texto = Styled.Text``;
