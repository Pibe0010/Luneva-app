import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import Styled from "styled-components/native";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useLocalSearchParams();
  const product = data ? JSON.parse(data) : null;
  if (!product) return null;

  return (
    <Container>
      <CloseContainer>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="close" size={35} color="#ffffff" />
        </TouchableOpacity>
      </CloseContainer>
      <CardContainer>
        <ImageContainer>
          {product.image_one ? (
            <CardImage source={{ uri: `${apiUrl}/products/${product.image_one}` }} />
          ) : (
            <NotImage>
              <MaterialIcons name="image" size={220} color="#ffffff" />
            </NotImage>
          )}
        </ImageContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <InfoContainer>
          <Price>Price: {product.price} Kr</Price>
          <Stock>Stock: {product.Stock}</Stock>
        </InfoContainer>
        <AddToCart onPress={() => router.push(`/cartShopping`)}>
          <ButtonTitle>Add to cart</ButtonTitle>
        </AddToCart>
      </CardContainer>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    width: 100%;
    background-color: #0f0e0e;;
    justify-content: center;
`;
const CloseContainer = Styled.View`
    position: absolute;
    top: 60px;
    right: 20px;
`;
const CardContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`;
const ImageContainer = Styled.View`
    background-color: rgba(111, 32, 201, 0.5);
    padding: 10px;
    border-radius: 20px;
    width: 250px;
    height: 250px;
    justify-content: center;
    align-items: center;
`;
const CardImage = Styled.Image`
    width: 100%;
    height: 100%;
    object-fit: contain; 
`;
const NotImage = Styled.View`
    width: 100%;
    height: 100%;
    object-fit: contain;
    justify-content: center;
    align-items: center;
`;
const Title = Styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fbfbfb;
    margin: 10px 0;
`;
const InfoContainer = Styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 10px 0;
`;
const Price = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fbfbfb;
`;
const Description = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fbfbfb;
    width: 100%;
    text-align: center;
    margin: 10px 0;
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
