import Styled from "styled-components/native";

export const RadioOption = ({ label, value, selected, onSelect }) => {
  return (
    <Container onPress={() => onSelect(value)}>
      <Label>{label}</Label>
      <Outer selected={selected}>{selected && <Inner />}</Outer>
    </Container>
  );
};

const Container = Styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-vertical: 8px;
  border-radius: 10px;
  width: 100%;
`;

const Label = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Outer = Styled.View`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border-width: 2px;
  border-color: ${({ selected, theme }) => (selected ? theme.primary : theme.text)};
  justify-content: center;
  align-items: center;
`;

const Inner = Styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.primary};
`;
