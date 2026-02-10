import Styled from "styled-components/native";
import { globalStyles } from "../../style/globalStyles.jsx";
import { OfferCard } from "./OfferCard.jsx";

export default function ProductsOffers({ offers, textFooterInfo, textHeaderInfo }) {
  const allOffers = offers;

  const renderItem = ({ item }) => <OfferCard offer={item} />;

  const firtsFour = allOffers.slice(0, 4);

  return (
    <Container style={globalStyles.container}>
      <List
        data={firtsFour}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <ListHeader>{textHeaderInfo}</ListHeader>}
        ListFooterComponent={() => <ListFooter>{textFooterInfo}</ListFooter>}
        scrollEnabled={false}
      />
    </Container>
  );
}

const Container = Styled.View`
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
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
`;
const ListFooter = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    text-align: center;
    margin: 10px;
`;
