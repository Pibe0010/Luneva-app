import Styled from "styled-components/native";

export function HomeInfo() {
  return (
    <Container>
      <LogoHome source={require("../../assets/images/luneva.png")} />
      <Texto>
        Our soaps are completely eco-friendly, handmade, and of high quality.{" "}
      </Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center; 
`;
const Texto = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin: 20px;
`;
const LogoHome = Styled.Image`
    width: 200px;
    height: 200px;
    margin: 20px 
`;
