import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

type MonthSelected = {
  isSelected: boolean;
};

export const ViewWrapper = styled.View`
  width: 250px;
  height: 300px;

  background: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  overflow: hidden;
`;

export const ViewHeader = styled.View`
  background: ${(props) => props.theme.colors.primary};
  height: 60px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextValueSelected = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.lg};
  font-family: ${fonts.type.text700};
  text-transform: capitalize;
`;

export const ViewContent = styled.View`
  padding: 16px;
  flex: 1;
`;

export const TextYear = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-align: center;
`;

export const ViewMonths = styled.View`
  margin-top: 16px;
  justify-content: space-between;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewMonth = styled.View<MonthSelected>`
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryOpacity : theme.colors.card};
  flex: 1;
  margin: 0 8px;
  border-radius: 8px;
  overflow: hidden;
`;

export const TextMonth = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  text-align: center;
`;
