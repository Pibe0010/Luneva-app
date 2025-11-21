import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text } from "react-native";
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
        <ActivityIndicator size="large" color="#5e06af" />;
      </LoadCointainer>
    );

  if (isError) return <Text>Error: {error.message}</Text>;

  const allProducts = data.data;

  const renderItem = ({ item }) => <ProductCard product={item} />;

  const firtsFour = allProducts.slice(0, 4);
  return (
    <SectionLists>
      <List
        data={firtsFour}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID_product}
        ListHeaderComponent={() => <ListHeader>Products</ListHeader>}
        ListFooterComponent={() => (
          <ListFooter>More products in the products section</ListFooter>
        )}
        scrollEnabled={false}
      />
    </SectionLists>
  );
}

const List = Styled.FlatList`
    flex: 1;
    width: 100%;
    padding: 10px;
    gap: 10px;   
`;
const ListHeader = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 30px;
`;
const ListFooter = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
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
