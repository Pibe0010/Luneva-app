import { MaterialIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";
import { ButtonAddProduct } from "../Cart/ButtonAddProduct.jsx";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export function ProductCard({ product }) {
  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  if (!product) return null;

  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          {product.image_one ? (
            <CardImage
              source={{ uri: `${apiUrl}/products/${product.image_one}` }}
              resizeMode="contain"
            />
          ) : (
            <NotImage>
              <MaterialIcons name="image" size={130} color={iconModeColor} />
            </NotImage>
          )}
        </ImageContainer>
        <Title>{product.name}</Title>
        <InfoContainer>
          <Stock>Stock: {product.Stock}</Stock>
          <Price>Price: {product.price} Kr</Price>
        </InfoContainer>

        <ButtonAddProduct product={product} />
      </CardContainer>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 180px;
    border: 2px solid ${({ theme }) => theme.border};
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.backgroundProduct};
`;
const CardContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;  
`;
const ImageContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 10px;
    border-radius: 15px;
`;
const CardImage = Styled.Image`
    width: 100%;
`;
const NotImage = Styled.View`
    width: 100%;
    height: 100%;    
    justify-content: center;
    align-items: center;
`;
const Title = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
const InfoContainer = Styled.View`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;
const Price = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
const Stock = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
