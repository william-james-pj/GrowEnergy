import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

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
  padding: 16px;
  border-radius: 8px;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-align: center;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const ViewFlex = styled.View`
  height: 140px;
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

export const ViewRow = styled.View`
  overflow: hidden;
`;

export const TextItem = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
`;
