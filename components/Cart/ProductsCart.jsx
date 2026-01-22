import Styled from "styled-components/native";
import { ProductCartDetails } from "./ProductCartDetails.jsx";

export function ProductCart({ products }) {
  return (
    <ProductListCart
      data={products}
      renderItem={({ item }) => <ProductCartDetails product={item} />}
      keyExtractor={(item) => item.ID_product}
    />
  );
}

const ProductListCart = Styled.FlatList`

`;
