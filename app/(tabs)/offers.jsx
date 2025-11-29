import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, StatusBar, Text } from "react-native";
import Styled from "styled-components/native";
import { Header } from "../../components/header/Header.jsx";
import ProductsOffers from "../../components/offers/ProductsOffers.jsx";
import { Timer } from "../../components/offers/Timer.jsx";
import { fetchOffers } from "../../hooks/Offers.js";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Offers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Offers"],
    queryFn: fetchOffers,
  });

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
          <Timer offer={data.data[0]} />
          <ProductsOffers textFooterInfo="" textHeaderInfo="" />
        </SectionLists>
      </Scroll>
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #0f0e0e;
    position: relative; 
`;

const SectionLists = Styled.View`
    flex: 1;
    width: 100%;
    margin-top: 50px;
`;
const Scroll = Styled.ScrollView`
    flex: 1;
    width: 100%;
`;
const Title = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin: 10px;
`;
const LoadCointainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
