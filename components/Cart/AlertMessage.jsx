import { MaterialIcons } from "@expo/vector-icons";
import Styled from "styled-components/native";

export const AlertMessage = ({ msj }) => {
  return (
    <Container>
      <Texto>{msj}</Texto>
      <MaterialIcons name="check-circle" size={30} color="#ffffff" />
    </Container>
  );
};

const Container = Styled.View`
  background-color: rgb(130, 72, 164);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`;
const Texto = Styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;
