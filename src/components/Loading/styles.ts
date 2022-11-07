import styled from "styled-components/native";

import { ActivityIndicator } from "react-native";

type ColorProps = {
  color: "background" | "primary";
};

export const Wrapper = styled.View<ColorProps>`
  background: ${(props) =>
    props.color === "background"
      ? props.theme.colors.background
      : props.theme.colors.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color:
    props.color === "background"
      ? props.theme.colors.primary
      : props.theme.colors.background,
}))<ColorProps>``;
