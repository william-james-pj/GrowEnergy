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
  align-items: center;
  padding: 8px 16px;
`;

export const TextName = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  flex: 1.5;
`;

export const TextEmail = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  flex: 2.5;
`;

export const ViewRule = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewRuleBox = styled.View<RuleType>`
  background: ${({ theme, type }) =>
    type ? theme.colors.primaryOpacity : theme.colors.secundaryOpacity};
  padding: 2px 5px;
  border-radius: 8px;
`;

export const TextRuleBoxText = styled.Text<RuleType>`
  color: ${({ theme, type }) =>
    type ? theme.colors.primary : theme.colors.secundary};
  font-size: 8px;
  font-family: ${fonts.type.text700};
`;

export const ViewStatus = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewStatusBox = styled.View<StatusType>`
  background: ${({ theme, active }) =>
    active ? theme.colors.greenOpacity : theme.colors.redOpacity};
  padding: 2px 5px;
  border-radius: 8px;
`;

export const TextStatusBoxText = styled.Text<StatusType>`
  color: ${({ theme, active }) =>
    active ? theme.colors.green : theme.colors.red};
  font-size: 8px;
  font-family: ${fonts.type.text700};
  text-align: center;
`;

export const ViewOptions = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
