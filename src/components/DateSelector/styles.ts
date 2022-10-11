import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  padding: 8px;
  border-radius: 8px;
  width: auto;

  flex-direction: row;
  align-items: center;
`;

export const ViewModalContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);

  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
`;

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  margin: 0 8px;
  text-transform: capitalize;
`;
