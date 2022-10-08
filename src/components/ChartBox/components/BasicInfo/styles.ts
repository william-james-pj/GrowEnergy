import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

type HigherProps = {
  isHigher: boolean;
};

type PrimaryProps = {
  isPrimary: boolean;
};

export const ViewWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ViewCiclerContainer = styled.View`
  margin-right: 8px;
  padding-top: 3px;
`;

export const ViewCicler = styled.View<PrimaryProps>`
  background: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.secundary};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

export const ViewGeneration = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const TextGeneration = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 8px;
  font-family: ${fonts.type.text400};
  margin-bottom: 4px;
`;

export const ViewHigherLower = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
`;

export const TextHigherLower = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;

export const TextHigherLowerValue = styled.Text<HigherProps>`
  color: ${({ theme, isHigher }) =>
    isHigher ? theme.colors.green : theme.colors.red};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin-left: 4px;
  margin-right: 4px;
`;
