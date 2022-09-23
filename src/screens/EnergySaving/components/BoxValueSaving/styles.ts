import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

type TextValueProps = {
  isSecundary: Boolean;
};

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 48%;
  padding: 16px;
  border-radius: 8px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextDate = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
  margin-bottom: 8px;
`;

export const ViewInfo = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TextCurrency = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-right: 4px;
  margin-bottom: 2px;
`;

export const TextValue = styled.Text<TextValueProps>`
  color: ${(props) =>
    !props.isSecundary
      ? props.theme.colors.primary
      : props.theme.colors.secundary};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;
