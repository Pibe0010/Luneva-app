import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Styled from "styled-components/native";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const ProductSearchCard = ({ data }) => {
  return (
    <SearchcardContainer
      onPress={() =>
        router.push({
          pathname: `/searchProductActive`,
          params: { data: JSON.stringify(data) },
        })
      }
    >
      <ImageContainer>
        {data.image_one ? (
          <ImageCard source={{ uri: `${apiUrl}/products/${data.image_one}` }} />
        ) : (
          <NotImage>
            <MaterialIcons name="image" size={100} color="#ffffff" />
          </NotImage>
        )}
      </ImageContainer>
      <CardInfo>
        <CardTitle>Soap: {data.name}</CardTitle>
        <CardTitle>Price: {data.price} Kr</CardTitle>
      </CardInfo>
    </SearchcardContainer>
  );
};

const SearchcardContainer = Styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    margin-bottom: 15px;
    background-color: #646265;

`;
const ImageContainer = Styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
const ImageCard = Styled.Image`
    width: 100px;
    height: 100px;
    object-fit: contain;
`;
const NotImage = Styled.View`
    width: 100px;
    height: 100px;    
    object-fix: contain;
`;
const CardTitle = Styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
`;
const CardInfo = Styled.View`
    flex: 1;
    gap: 10px;
    margin-right: 10px;
`;
