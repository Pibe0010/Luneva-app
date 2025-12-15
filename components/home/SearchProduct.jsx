import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ActivityIndicator, SectionList, Text } from "react-native";
import Styled from "styled-components/native";
import { useTheme } from "../../context/ThemeContext.jsx";
import { fetchSearchProduct } from "../../hooks/Products.js";
import { ProductSearchCard } from "./ProductSearchCard.jsx";

export const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["SearchProduct", searchTerm],
    queryFn: () => fetchSearchProduct(searchTerm),
    enabled: searchTerm.trim().length > 0,
  });

  const textModeColor = theme === "dark" ? "#ffffff" : "#0f0e0e";

  return (
    <SearchContainer>
      <SearchProductHome
        placeholder="Search soap..."
        placeholderTextColor={textModeColor}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setSearchTerm}
        value={searchTerm}
      />

      {isLoading && (
        <LoadContainer>
          <ActivityIndicator size="large" color="#5e06af" />
        </LoadContainer>
      )}

      {isError && <Text style={{ color: "red" }}>Error: {error.message}</Text>}

      {!isLoading && data.length === 0 && searchTerm.length > 0 && (
        <NotResultContainer>
          <NotResultText>Not results</NotResultText>
        </NotResultContainer>
      )}

      {data.length > 0 && (
        <SectionList
          sections={[{ title: "Products", data }]}
          renderItem={({ item }) => <ProductSearchCard data={item} />}
          renderSectionHeader={({ section }) => <HeaderText>{section.title}</HeaderText>}
          ListFooterComponent={() => (
            <FooterText>More products in the products section</FooterText>
          )}
          keyExtractor={(item) => item.ID_product}
          scrollEnabled={false}
        />
      )}
    </SearchContainer>
  );
};

const SearchContainer = Styled.View`
  flex: 1;
  width: 100%;
  padding: 10px;
`;

const SearchProductHome = Styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 10px;
  margin: 30px 0;
  color: ${({ theme }) => theme.text};
`;
const LoadContainer = Styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const NotResultContainer = Styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  witth: 100%;
`;
const NotResultText = Styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
const HeaderText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;
const FooterText = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  text-align: center;
`;
