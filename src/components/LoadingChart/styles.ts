import styled from "styled-components/native";

import { ActivityIndicator } from "react-native";

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary,
}))``;
