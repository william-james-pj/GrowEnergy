import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 170px;
  padding: 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewTextContainer = styled.View`
  flex-direction: row;
`;

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin: 0 8px;
`;

export const ViewModalContainer = styled.View`
  width: 170px;
  height: auto;
  max-height: 200px;
  background: ${(props) => props.theme.colors.card};
  z-index: 999;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 32px;
  border-radius: 8px;
  padding-bottom: 4px;
`;

export const ViewRow = styled.View`
  padding: 8px;
`;

export const TextItem = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`;
