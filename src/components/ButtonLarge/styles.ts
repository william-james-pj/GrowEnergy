import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 50px;

  border-radius: 8px;
  overflow: hidden;
`;

export const Button = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-transform: uppercase;
`;
