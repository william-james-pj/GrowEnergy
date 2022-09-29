import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

type RuleType = {
  type: boolean;
};

type StatusType = {
  active: boolean;
};

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex-direction: row;
  padding: 8px 16px;
`;

export const TextName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  flex: 1;
`;

export const TextEmail = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  flex: 2;
`;

export const TextRule = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  flex: 1;
  text-align: center;
`;

export const TextStatus = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  flex: 1;

  text-align: center;
`;

export const ViewOptions = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
