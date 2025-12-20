import Styled from "styled-components/native";

export const ProductCartDetails = ({ product }) => {
  return (
    <Container>
      <ProductImage />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductCuantity>{product.quantity}</ProductCuantity>
    </Container>
  );
};

const Container = Styled.View``;
const ProductImage = Styled.Image``;
const ProductName = Styled.Text``;
const ProductPrice = Styled.Text``;
const ProductCuantity = Styled.Text``;
