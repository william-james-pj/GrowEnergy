import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  min-height: 60px;
`;

export const TextEmpty = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  flex: 5;
  padding: 8px 16px;
  background: ${(props) => props.theme.colors.card};
  border-color: ${(props) => props.theme.colors.disabled};
`;
