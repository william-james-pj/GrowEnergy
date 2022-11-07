import React from "react";

import * as S from "./styles";

type BoxValueSavingProps = {
  title: String;
  value: Number;
  date?: String;
  isSecudary?: Boolean;
};

export function BoxValueSaving({
  title,
  value,
  date,
  isSecudary = false,
}: BoxValueSavingProps) {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.TextTitle>{title}</S.TextTitle>
        {date !== undefined ? <S.TextDate>{date}</S.TextDate> : null}
      </S.ViewRow>
      <S.ViewInfo>
        <S.TextCurrency>R$</S.TextCurrency>
        <S.TextValue isSecundary={isSecudary}>
          {!isSecudary ? value : `${value} kWh`}
        </S.TextValue>
      </S.ViewInfo>
    </S.ViewWrapper>
  );
}
