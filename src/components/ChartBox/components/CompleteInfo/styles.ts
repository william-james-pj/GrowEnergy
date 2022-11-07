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
  align-items: center;
`;

export const ViewGenerationTotal = styled.View`
  flex-direction: column;
  margin-right: 8px;
`;

export const ViewGeneration = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewCicler = styled.View<PrimaryProps>`
  background: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.secundary};
  width: 6px;
  height: 6px;
  border-radius: 3px;

  margin-right: 8px;
`;

export const TextGeneration = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 8px;
  font-family: ${fonts.type.text400};
`;

export const ViewRowGenerationTotal = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const TextGenerationTotal = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;

export const TextMeasure = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};

  margin-left: 6px;
  margin-bottom: 2px;
`;

export const ViewHigherLower = styled.View`
  flex-direction: column;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextHigherLower = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};

  width: 22px;
`;

export const TextHigherLowerValue = styled.Text<HigherProps>`
  color: ${({ theme, isHigher }) =>
    isHigher ? theme.colors.green : theme.colors.red};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin-left: 4px;
  margin-right: 4px;
`;
