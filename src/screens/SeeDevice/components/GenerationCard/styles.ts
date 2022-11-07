import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewInfoBox = styled.View`
  align-items: flex-end;
  margin-left: 16px;
`;

export const ViewLine = styled.View`
  width: 2px;
  height: 36px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.disabled};
  margin: 0 32px;
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
