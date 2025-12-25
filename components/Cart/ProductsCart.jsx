import Styled from "styled-components/native";
import { ProductCartDetails } from "./ProductCartDetails.jsx";

export function ProductCart({ products }) {
  const allProducts = products;

  const renderItem = ({ item: products }) => <ProductCartDetails product={products} />;

  return (
    <ProductListCart
      data={allProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID_product}
    />
  );
}

const ProductListCart = Styled.FlatList`

`;
