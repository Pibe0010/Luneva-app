import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text } from "react-native";
import Styled from "styled-components/native";
import { fetchOffers } from "../../hooks/Offers.js";
import { globalStyles } from "../../style/globalStyles.jsx";
import { OfferCard } from "./OfferCard.jsx";

export default function ProductsOffers({ textFooterInfo, textHeaderInfo }) {
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

  const allOffers = data.data;

  const renderItem = ({ item }) => <OfferCard offer={item} />;

  const firtsFour = allOffers.slice(0, 4);

  return (
    <Container style={globalStyles.container}>
      <List
        data={firtsFour}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID_offer}
        ListHeaderComponent={() => <ListHeader>{textHeaderInfo}</ListHeader>}
        ListFooterComponent={() => <ListFooter>{textFooterInfo}</ListFooter>}
        scrollEnabled={false}
      />
    </Container>
  );
}

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
`;
const List = Styled.FlatList`
    flex: 1;
    width: 100%;
    padding: 10px;
    gap: 10px;
`;
const ListHeader = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    margin-bottom: 30px;
`;
const ListFooter = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 10px;
`;
const LoadCointainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
