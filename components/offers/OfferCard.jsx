import { MaterialIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";
import { ButtonAddProduct } from "../Cart/ButtonAddProduct.jsx";
import { Timer } from "./Timer.jsx";

export function OfferCard({ offer }) {
  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  if (!offer) return null;
  const end = offer.ending_date ? new Date(offer.ending_date).getTime() : 0;
  const now = Date.now();
  const diff = end - now;

  return (
    <Container>
      <Timer offer={offer} />
      <CardContainer>
        <ImageContainer>
          {offer.image_one_product ? (
            <CardImage source={{ uri: `${offer.image_one_product}` }} />
          ) : (
            <NotImage>
              <MaterialIcons name="image" size={150} color={iconModeColor} />
            </NotImage>
          )}
        </ImageContainer>
        <Title>{offer.name_product}</Title>
        <Description>{offer.description_product}</Description>
        <InfoContainer>
          <Price>Price: {offer.price_product} Kr</Price>
          <Discount>Discount: {offer.discount}%</Discount>
        </InfoContainer>
        {diff > 0 && <ButtonAddProduct product={offer} />}
      </CardContainer>
    </Container>
  );
}

const Container = Styled.View`
    gap: 10px;
    width: 100%;
    margin-bottom: 20px;
`;
const CardContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.border};
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.backgroundProduct};   
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
const Description = Styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    width: 100%;
    text-align: center;
`;
const Discount = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
