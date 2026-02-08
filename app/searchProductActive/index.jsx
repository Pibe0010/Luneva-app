import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import Styled from "styled-components/native";
import { ButtonAddProduct } from "../../components/Cart/ButtonAddProduct.jsx";
import { Icon } from "../../components/IconComponent/Icon.jsx";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useLocalSearchParams();
  const product = data ? JSON.parse(data) : null;
  if (!product) return null;

  return (
    <Container>
      <Icon name="close" size={35} />
      <CardContainer>
        <ImageContainer>
          {product.image_one ? (
            <CardImage source={{ uri: `${product.image_one}` }} />
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
          <Stock>Stock: {product.stock}</Stock>
        </InfoContainer>
        <ButtonAddProduct product={product} />
      </CardContainer>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.Background};
    justify-content: center;
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
    color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.text};;
    width: 100%;
    text-align: center;
    margin: 10px 0;
`;
const Stock = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fbfbfb;
`;
