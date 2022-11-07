import React from "react";

import * as S from "./styles";

type SeeConOverviewBox = {
  title: String;
  value: Number;
  isSecudary?: Boolean;
};

export function SeeConOverviewBox({
  title,
  value,
  isSecudary = false,
}: SeeConOverviewBox) {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.TextTitle>{title}</S.TextTitle>
        <S.TextDate>Hoje</S.TextDate>
      </S.ViewRow>
      <S.ViewInfo>
        <S.TextValue isSecundary={isSecudary}>{value}</S.TextValue>
        <S.TextUnity>kW</S.TextUnity>
      </S.ViewInfo>
    </S.ViewWrapper>
  );
}
