import Styled from "styled-components/native";

export default function Profile() {
  return (
    <Container>
      <Texto>name</Texto>
      <Texto>lastName</Texto>
      <Texto>email</Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background}; 
`;
const Texto = Styled.Text`
  font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 20px;
`;
