import Styled from "styled-components/native";
import { CardProfile } from "../../components/Profile/CardProfile.jsx";

export default function Profile() {
  return (
    <Container>
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
