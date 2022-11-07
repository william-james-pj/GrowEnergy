import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.cardSecundary};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewText = styled.View``;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
  margin-bottom: 4px;
`;

export const ViewValueRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TextCurrency = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-right: 4px;
  margin-bottom: 2px;
`;

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.secundary};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const ViewImg = styled.View``;

export const ViewFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const TextDate = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;

export const ViewDetailsRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextDetails = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin-right: 2px;
`;
