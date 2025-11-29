import { router } from "expo-router";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import { Header } from "../../components/header/Header.jsx";
import { HomeInfo } from "../../components/home/HomeInfo.jsx";
import { ProductsStock } from "../../components/home/ProductsStock.jsx";
import { SearchProduct } from "../../components/home/SearchProduct.jsx";
import { ProductList } from "../../components/products/ProductsList.jsx";
import { globalStyles } from "../../style/globalStyles.jsx";

export default function Index() {
  return (
    <Container style={globalStyles.container}>
      <Header />
      <StatusBar style="light" />
      <Scroll>
        <SearchProduct />
        <ProductsStock />
        <LoginContainer>
          <Logintext>Sing in for your best experience</Logintext>
          <LoginButton
            onPress={() => {
              router.push("/login");
            }}
          >
            <LoginButtonText>Sing in</LoginButtonText>
          </LoginButton>
        </LoginContainer>
        <ProductList />
        <HomeInfo />
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
const Scroll = Styled.ScrollView`
    flex: 1;
    width: 100%;
`;
const LoginContainer = Styled.View`
    flex: 1;
    width: 100%;
    margin: 30px 0;
    gap: 10px;
`;
const Logintext = Styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
const LoginButton = Styled.TouchableOpacity`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    background-color: #5b2f8e;
    padding: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const LoginButtonText = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
`;
