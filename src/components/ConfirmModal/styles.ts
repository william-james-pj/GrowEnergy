import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

type ButtonProps = {
  isPrimary: boolean;
};

export const ViewWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 32px;
`;

export const ViewBox = styled.View`
  background: ${(props) => props.theme.colors.card};
  padding: 32px;
  border-radius: 8px;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
  text-align: center;
  margin-bottom: 8px;
`;

export const TextDescription = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text400};
  text-align: center;
`;

export const ViewButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
`;

export const Button = styled.View<ButtonProps>`
  background: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "transparent"};
  height: 30px;

  padding: 0px 12px;
  border-radius: 8px;
  overflow: hidden;
  border-width: ${({ isPrimary }) => (isPrimary ? "0px" : "1px")};
  border-color: ${(props) => props.theme.colors.disabled};

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<ButtonProps>`
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.white : theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
`;
