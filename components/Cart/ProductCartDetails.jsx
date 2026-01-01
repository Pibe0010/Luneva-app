import { MaterialIcons } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";
import { fetchCartRemoveProduct, fetchCartUpdateProduct } from "../../hooks/cart.js";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const ProductCartDetails = ({ product }) => {
  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  const queryClient = useQueryClient();

  const updateQuantity = useMutation({
    mutationFn: ({ ID_product, products_amount }) =>
      fetchCartUpdateProduct({ ID_product, products_amount }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (ID_product) => fetchCartRemoveProduct(ID_product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <CardContainer>
      <ImageContainer>
        {product.image_one ? (
          <CardImage
            source={{ uri: `${apiUrl}/products/${product.image_one}` }}
            resizeMode="contain"
          />
        ) : (
          <NotImage>
            <MaterialIcons name="image" size={70} color={iconModeColor} />
          </NotImage>
        )}
      </ImageContainer>
      <Details>
        <InfoContainer>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} Kr</ProductPrice>
          {product.discout_rate && <OffertDetail>{product.discount_rate}%</OffertDetail>}
        </InfoContainer>

        <QuantityRow>
          <Icon
            onPress={() =>
              updateQuantity.mutate({
                ID_product: product.ID_product,
                products_amount: String(-1),
              })
            }
          >
            <MaterialIcons name="remove" size={22} color={iconModeColor} />
          </Icon>

          <Quantity>{product.product_amount}</Quantity>

          <Icon
            onPress={() =>
              updateQuantity.mutate({
                ID_product: product.ID_product,
                products_amount: String(1),
              })
            }
          >
            <MaterialIcons name="add" size={22} color={iconModeColor} />
          </Icon>
        </QuantityRow>
      </Details>

      <Delete onPress={() => deleteProduct.mutate(product.ID_product)}>
        <MaterialIcons name="delete" size={22} color="red" />
      </Delete>
    </CardContainer>
  );
};

const CardContainer = Styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.border};
  width: 100%;
`;
const ImageContainer = Styled.View`
  width: 80px;
  height: 80px;
`;
const CardImage = Styled.Image`
  width: 100%;
  height: 100%;
  margin-right: 10px;
`;
const NotImage = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Details = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InfoContainer = Styled.View`
  flex: 1;
`;
const ProductName = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin: 5px;
`;
const ProductPrice = Styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 5px;
`;
const OffertDetail = Styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  margin: 5px;
`;
const QuantityRow = Styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;
const Icon = Styled.TouchableOpacity`
  padding: 5px;
`;
const Quantity = Styled.Text`
  margin: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
const Delete = Styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
