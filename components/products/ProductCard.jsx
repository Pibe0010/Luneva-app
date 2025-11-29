import { MaterialIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export function ProductCard({ product }) {
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
              <MaterialIcons name="image" size={130} color="#ffffff" />
            </NotImage>
          )}
        </ImageContainer>
        <Title>{product.name}</Title>
        <InfoContainer>
          <Stock>Stock: {product.Stock}</Stock>
          <Price>Price: {product.price} Kr</Price>
        </InfoContainer>
        <AddToCart>
          <ButtonTitle>Add to cart</ButtonTitle>
        </AddToCart>
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
    border: 2px solid #fefefe;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
    background-color: #646265;
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
    border: 1px solid #fefefe;
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
    color: #fbfbfb;
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
    color: #fbfbfb;
`;
const Stock = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fbfbfb;
`;
const AddToCart = Styled.TouchableOpacity`
    background-color: #6f20c9;
    padding: 5px;
    border-radius: 10px;
    width: 90%;
`;
const ButtonTitle = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fbfbfb;
    text-align: center;

`;
