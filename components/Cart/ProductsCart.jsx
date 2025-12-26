import Styled from "styled-components/native";
import { ProductCartDetails } from "./ProductCartDetails.jsx";

export function ProductCart({ products }) {
  const grouped = Object.values(
    products.reduce((acc, item) => {
      if (acc[item.ID_product] === undefined) {
        acc[item.ID_product] = { ...item };
      } else {
        acc[item.ID_product].products_amount += item.products_amount;
      }
      return acc;
    }, {})
  );

  const renderItem = ({ item: grouped }) => <ProductCartDetails product={grouped} />;

  return (
    <ProductListCart
      data={grouped}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID_product}
    />
  );
}

const ProductListCart = Styled.FlatList`

`;
