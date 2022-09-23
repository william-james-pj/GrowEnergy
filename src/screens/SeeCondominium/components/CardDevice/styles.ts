import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex: 1;
  display: flex;
  padding: 16px;
  border-radius: 8px;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TextCondominiumName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text700};
`;

export const TextDistrict = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;

export const ViewContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewGeneration = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewCicle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background};
  margin-right: 16px;

  align-items: center;
  justify-content: center;
`;

export const ViewGenerationText = styled.View``;

export const TextGeneration = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;

export const TextGenerationValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;
