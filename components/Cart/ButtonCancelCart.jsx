import { useMutation, useQueryClient } from "@tanstack/react-query";
import Styled from "styled-components/native";
import { useToast } from "../../context/ToastContext.jsx";
import { fetchCartDelete } from "../../hooks/cart.js";

export const ButtonCancelCart = () => {
  const { showToast } = useToast();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => fetchCartDelete(),
    onSuccess: () => {
      queryClient.setQueryData(["cart"], []);
      showToast("Cart deleted");
    },
  });

  const handleAddToCart = () => {
    mutate();
  };

  return (
    <CancelButton onPress={handleAddToCart} disabled={isLoading}>
      <TextCancel>{isLoading ? "Adding..." : "Cancel"}</TextCancel>
    </CancelButton>
  );
};

const CancelButton = Styled.TouchableOpacity`
  background-color: #9318e5c2;
  padding: 10px;
  border-radius: 10px;
  width: 45%;
  align-items: center;
`;
const TextCancel = Styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;
