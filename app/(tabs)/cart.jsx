import Styled from "styled-components/native";
import { ProductCart } from "../../components/Cart/ProductsCart.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Cart() {
  return (
    <Container style={globalStyles.container}>
      <ProductsContainer>
        <ProductCart />
      </ProductsContainer>

      <Footer>
        <TotalPrice>Total: 1000 Kr</TotalPrice>

        <ButtonsContainer>
          <BuyButton onPress={() => {}}>
            <TextBuy>Buy</TextBuy>
          </BuyButton>

          <CancelButton onPress={() => {}}>
            <TextCancel>Cancel</TextCancel>
          </CancelButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

const Container = Styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Background};
`;
const ProductsContainer = Styled.View`
  flex: 1;
  padding: 10px;
`;
const Footer = Styled.View`
  padding: 15px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.border};
`;
const TotalPrice = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 10px;
`;
const ButtonsContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const BuyButton = Styled.TouchableOpacity`
  background-color: #18f504a3;
  padding: 10px;
  border-radius: 10px;
  width: 45%;
  align-items: center;
`;
const CancelButton = Styled.TouchableOpacity`
  background-color: #e51818;
  padding: 10px;
  border-radius: 10px;
  width: 45%;
  align-items: center;
`;
const TextBuy = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
const TextCancel = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
