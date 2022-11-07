import React from "react";

import * as S from "./styles";

type LoadingProps = {
  color?: "background" | "primary";
};

export function Loading({ color = "background" }: LoadingProps) {
  return (
    <S.Wrapper color={color}>
      <S.Indicator size="large" color={color} />
    </S.Wrapper>
  );
}
