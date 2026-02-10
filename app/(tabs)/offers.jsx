import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, StatusBar, Text } from "react-native";
import Styled from "styled-components/native";
import { Header } from "../../components/header/Header.jsx";
import ProductsOffers from "../../components/offers/ProductsOffers.jsx";
import { fetchOffers } from "../../hooks/Offers.js";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Offers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Offers"],
    queryFn: fetchOffers,
  });

  const activeOffers = data?.filter((offer) => offer.active === true);

  if (isLoading)
    return (
      <LoadCointainer>
        <ActivityIndicator size="large" color="#5e06af" />
      </LoadCointainer>
    );

  if (isError) return <Text>Error: {error.message}</Text>;

  return (
    <Container style={globalStyles.container}>
      <Header />
      <StatusBar style="light" />
      <Scroll>
        <Title>OFFERS</Title>
        <SectionLists>
          {activeOffers?.length > 0 ? (
            <ProductsOffers offers={activeOffers} textFooterInfo="" textHeaderInfo="" />
          ) : (
            <Text>There are no active offers</Text>
          )}
        </SectionLists>
      </Scroll>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.Background}; 
`;
const SectionLists = Styled.View`
    width: 100%;
    margin-top: -70px;
`;
const Scroll = Styled.ScrollView`
    width: 100%;
`;
const Title = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin: 30px;
`;
const LoadCointainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
