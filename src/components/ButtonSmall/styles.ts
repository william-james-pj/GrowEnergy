import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

type ButtonProps = {
  isPrimary: boolean;
};

export const Wrapper = styled.View<ButtonProps>`
  background: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "transparent"};
  height: 30px;

  padding: 0px 12px;
  border-radius: 8px;
  overflow: hidden;
  border-width: ${({ isPrimary }) => (isPrimary ? "0px" : "1px")};
  border-color: ${(props) => props.theme.colors.disabled};
`;

export const Button = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<ButtonProps>`
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.white : theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;
