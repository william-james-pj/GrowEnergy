import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 48%;
  display: flex;
  padding: 16px;
  border-radius: 8px;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
  margin-bottom: 16px;
`;

export const ViewRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewInfo = styled.View`
  display: flex;
`;

export const TextDate = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;
