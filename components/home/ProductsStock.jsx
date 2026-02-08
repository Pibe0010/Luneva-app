import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text } from "react-native";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";
import { fetchOffers } from "../../hooks/Offers.js";
import { fetchProducts } from "../../hooks/Products.js";

export function ProductsStock() {
  const { theme } = useTheme();
  const iconModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    data: offers,
    isLoading: isLoadingOffers,
    isError: isErrorOffers,
    error: errorOffers,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: fetchOffers,
  });

  const totalProducts = data?.length || 0;
  const totalOffers = offers?.length || 0;

  return (
    <ProductsContainer>
      <Products>
        {isLoading ? (
          <LoadContainer>
            <ActivityIndicator size="large" color="#77648a" />
          </LoadContainer>
        ) : (
          <>
            <IconContainer>
              <FontAwesome6 name="soap" size={27} color={iconModeColor} />
            </IconContainer>
            <InfoProductsText>
              <ProductsText>Products: </ProductsText>
              <TotalProducts>{totalProducts}</TotalProducts>
            </InfoProductsText>
          </>
        )}
      </Products>
      <Offers>
        {isLoadingOffers ? (
          <LoadContainer>
            <ActivityIndicator size="large" color="#77648a" />
          </LoadContainer>
        ) : (
          <>
            <IconContainer>
              <MaterialCommunityIcons name="offer" size={35} color={iconModeColor} />
            </IconContainer>
            <InfoProductsText>
              <OffersText>Offers: </OffersText>
              <TotalOffers>{totalOffers}</TotalOffers>
            </InfoProductsText>
          </>
        )}
      </Offers>

      {isError || isErrorOffers ? (
        <Text>Error: {error?.message || errorOffers?.message}</Text>
      ) : null}
    </ProductsContainer>
  );
}

const ProductsContainer = Styled.View`
    flex: 1;
    width: 100%;
    margin: 30px 0;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
`;
const Products = Styled.View`
    flex: 1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundInfoProducts};
    margin: 5px;
    height: 100px;
`;
const Offers = Styled.View`
    flex: 1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundInfoProducts};
    margin: 5px;
    height: 100px;
`;
const IconContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
const InfoProductsText = Styled.View`
    flex: 1;
    flex-direction: row;
`;
const ProductsText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
`;
const OffersText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:  ${({ theme }) => theme.text};;
`;
const TotalProducts = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:  ${({ theme }) => theme.text};;
`;
const TotalOffers = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:  ${({ theme }) => theme.text};
`;
const LoadContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
