import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import Styled from "styled-components/native";
import { ProductCart } from "../../components/Cart/ProductsCart.jsx";
import { fetchCartList } from "../../hooks/cart.js";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Cart() {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCartList,
  });
  console.log(data);

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator size="large" color="#5e06af" />
      </Container>
    );

  if (isError) return <Texto>Error: {error.message}</Texto>;

  const total = data.reduce((acc, p) => acc + p.price * p.products_amount, 0);

  return (
    <Container style={globalStyles.container}>
      <ProductsContainer>
        <ProductCart products={data} />
      </ProductsContainer>

      <Footer>
        <TotalPrice>Total: {total} Kr</TotalPrice>

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
  width: 100%;
`;
const ProductsContainer = Styled.View`
  flex: 1;
  padding: 10px;
  width: 100%;
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
const Texto = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin: 20px;
`;
