import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Styled from "styled-components/native";
import { fetchCartAdd } from "../../hooks/cart.js";
import { AlertMessage } from "./AlertMessage.jsx";

export const ButtonAddProduct = ({ product }) => {
  const [message, setMessage] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ id, amount }) => fetchCartAdd(id, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      setMessage(true);
    },
  });

  const handleAddToCart = () => {
    mutate({
      id: product.ID_product,
      amount: 1,
    });
  };

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <ButtomContainer>
      <AddToCart onPress={handleAddToCart} disabled={isLoading}>
        <ButtonTitle>{isLoading ? "Adding..." : "Add to cart"}</ButtonTitle>
      </AddToCart>

      {message && (
        <MessageContainer>
          <AlertMessage msj="Product added to cart" />
        </MessageContainer>
      )}
    </ButtomContainer>
  );
};

const ButtomContainer = Styled.View`
  position: relative;
  width: 100%;
`;
const AddToCart = Styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.bgButtonCard};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`;
const ButtonTitle = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
const MessageContainer = Styled.View`
  position: absolute;
  top: -600px;
  left: 0;
  width: 100%;
  z-index: 999;
  elevation: 999;
`;
