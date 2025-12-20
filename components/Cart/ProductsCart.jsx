import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Styled from "styled-components/native";
import { fetchCartList } from "../../hooks/cart.js";
import { ProductCartDetails } from "./ProductCartDetails.jsx";

export function ProductCart() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Cart list"],
    queryFn: fetchCartList,
  });

  if (isLoading)
    return (
      <Container>
        <ActivityIndicator size="large" color="#5e06af" />
      </Container>
    );

  if (isError) return <Texto>Error: {error.message}</Texto>;

  const allProducts = data.data;

  const renderItem = ({ item: data }) => (
    <TouchableOpacity>
      <ProductCartDetails product={data} />
    </TouchableOpacity>
  );

  return (
    <Container>
      <ProductListCart data={allProducts} renderItem={renderItem} />
    </Container>
  );
}

const Container = Styled.View`
    justify-content: center;
    align-items: center;
`;
const Texto = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 20px;
`;
const ProductListCart = Styled.FlatList``;
