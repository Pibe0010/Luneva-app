import { useMutation, useQueryClient } from "@tanstack/react-query";
import Styled from "styled-components/native";
import { fetchCartAdd } from "../../hooks/cart.js";

export const ButtonAddProduct = ({ product }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ id, amount }) => fetchCartAdd(id, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleAddToCart = () => {
    mutate({
      id: product.ID_product,
      amount: 1,
    });
  };

  return (
    <AddToCart onPress={handleAddToCart} disabled={isLoading}>
      <ButtonTitle>{isLoading ? "Adding..." : "Add to cart"}</ButtonTitle>
    </AddToCart>
  );
};

const AddToCart = Styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.bgButtonCard};
    padding: 5px;
    border-radius: 10px;
    width: 90%;
`;
const ButtonTitle = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};;
    text-align: center;
`;
