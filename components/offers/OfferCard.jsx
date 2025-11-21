import { MaterialIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export function OfferCard({ offer }) {
  if (!offer) return null;

  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          {offer.image_one ? (
            <CardImage source={{ uri: `${apiUrl}/products/${offer.image_one}` }} />
          ) : (
            <NotImage>
              <MaterialIcons name="image" size={150} color="#ffffff" />
            </NotImage>
          )}
        </ImageContainer>
        <Title>{offer.name}</Title>
        <Description>{offer.description}</Description>
        <InfoContainer>
          <Price>Price: {offer.price} Kr</Price>
          <Discount>Discount: {offer.discount_rate}%</Discount>
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
    width: 100%;
`;

const CardContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px;
    border: 2px solid #fefefe;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 20px;
    background-color: #685273;   
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
    height: 100%;
    object-fix: contain;    
`;
const NotImage = Styled.View`
    width: 100%;
    height: 100%;    
    justify-content: center;
    align-items: center;
    object-fix: contain;
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
const Description = Styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fbfbfb;
    width: 100%;
    text-align: center;
`;
const Discount = Styled.Text`
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
