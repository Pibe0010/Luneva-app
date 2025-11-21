import Styled from "styled-components/native";
import DropDownHeader from "./DropdownHeader.jsx";

export function Header() {
  return (
    <HeaderHome>
      <Logo>LUNEVA - SHOP</Logo>
      <DropDownHeader />
    </HeaderHome>
  );
}

const HeaderHome = Styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #7507f3;
    width: 100%;
    text-align: center;
    padding: 15px;
    border-radius: 20px;
    position: fixed;
`;
const Logo = Styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
`;
