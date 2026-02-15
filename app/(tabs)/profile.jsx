import Styled from "styled-components/native";
import { CardProfile } from "../../components/Profile/CardProfile.jsx";
import { Header } from "../../components/header/Header.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Profile() {
  return (
    <Container style={globalStyles.container}>
      <Header />
      <CardProfile />
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background}; 
`;
