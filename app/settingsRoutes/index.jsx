import Styled from "styled-components/native";
import Settings from "../(tabs)/settings.jsx";

export default function index() {
  return (
    <Container>
      <Settings />
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
