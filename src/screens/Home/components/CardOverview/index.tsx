import React from "react";

import * as S from "./styles";

type CardOverviewProps = {
  title: String;
  valueToday: Number;
  valueMonth: Number;
};

export function CardOverview({
  title,
  valueToday,
  valueMonth,
}: CardOverviewProps) {
  return (
    <S.ViewWrapper>
      <S.TextTitle>{title}</S.TextTitle>
      <S.ViewRow>
        <S.ViewInfo>
          <S.TextDate>Hoje</S.TextDate>
          <S.TextValue>{valueToday} kW</S.TextValue>
        </S.ViewInfo>
        <S.ViewInfo>
          <S.TextDate>Esse mês</S.TextDate>
          <S.TextValue>{valueMonth} kW</S.TextValue>
        </S.ViewInfo>
      </S.ViewRow>
    </S.ViewWrapper>
  );
}
