import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex-direction: row;
  padding: 8px 16px;

  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.disabled};
`;

export const TextName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  flex: 1;
`;

export const ViewOptions = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
