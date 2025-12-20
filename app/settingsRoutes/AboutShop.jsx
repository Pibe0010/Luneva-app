import Styled from "styled-components/native";

export default function AboutShop() {
  return (
    <Container>
      <LogoHome source={require("../../assets/images/luneva.png")} />
      <Texto>
        Our shop offers an exclusive selection of 100% natural, handcrafted soaps, made
        with carefully selected ingredients. Each soap is created using traditional
        techniques, with essential oils, vegetable butters, and natural extracts, free of
        harmful chemicals. We focus on providing high-quality products that care for both
        your skin and the environment. All our soaps are biodegradable, vegan, and
        cruelty-free. Enjoy a unique personal care experience with soft aromas and
        textures that nourish and moisturize. Perfect for those seeking conscious and
        natural care in every detail.
      </Texto>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.Background};
    width: 100%;  
`;
const Texto = Styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    margin: 20px;
`;
const LogoHome = Styled.Image`
    width: 200px;
    height: 200px;
    margin: 20px 
`;
