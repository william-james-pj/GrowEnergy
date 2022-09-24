import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  padding: 32px 16px 32px 16px;
`;

export const TextSectionTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;
