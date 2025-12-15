import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import Styled from "styled-components/native";
import { fetchProducts } from "../../hooks/Products.js";
import { ProductCard } from "./ProductCard.jsx";

export function ProductList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <LoadCointainer>
        <ActivityIndicator size="large" color="#5e06af" />
      </LoadCointainer>
    );

  if (isError) return <Text>Error: {error.message}</Text>;

  const allProducts = data.data;

  const renderItem = ({ item: data }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/searchProductActive`,
          params: { data: JSON.stringify(data) },
        })
      }
    >
      <ProductCard product={data} />
    </TouchableOpacity>
  );

  return (
    <SectionLists>
      <List
        data={allProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID_product}
        ListHeaderComponent={() => <ListHeader>Products</ListHeader>}
        ListFooterComponent={() => <ListFooter>Take care of your skin</ListFooter>}
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
      />
    </SectionLists>
  );
}

const List = Styled.FlatList`
    flex: 1;
    width: 100%;
`;
const ListHeader = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin-bottom: 30px;
`;
const ListFooter = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 10px;
`;
const LoadCointainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const SectionLists = Styled.View`
    flex: 1;
    width: 100%;
`;
