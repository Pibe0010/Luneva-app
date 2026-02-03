import Styled from "styled-components/native";

export const CardProfile = () => {
  return (
    <Container>
      <Name>Manuel</Name>
      <LastName>Santos</LastName>
      <Email>Ema@gmail.com</Email>
      <Address>
        <AddressNAMe>Calle de los pepitos </AddressNAMe>
        <AddressNumber>1</AddressNumber>
      </Address>
      <Phone>0756262626</Phone>
    </Container>
  );
};

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%; 
`;
const Name = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const LastName = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const Email = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const Address = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const AddressNAMe = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const AddressNumber = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
const Phone = Styled.Text`
    color: ${({ theme }) => theme.text};
`;
