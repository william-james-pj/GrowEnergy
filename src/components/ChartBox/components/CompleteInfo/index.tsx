import React from "react";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import HigherSVG from "../../../../assets/svg/Higher.svg";
import LowerSVG from "../../../../assets/svg/Lower.svg";

import * as S from "./styles";

type CompleteInfoProps = {
  title: string;
  value: string;
  maxValue: string;
  minValue: string;
  isPrimary: boolean;
};

export function CompleteInfo({
  title,
  value,
  maxValue,
  minValue,
  isPrimary,
}: CompleteInfoProps) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <S.ViewGenerationTotal>
        <S.ViewGeneration>
          <S.ViewCicler isPrimary={isPrimary}></S.ViewCicler>
          <S.TextGeneration>{title}</S.TextGeneration>
        </S.ViewGeneration>
        <S.ViewRowGenerationTotal>
          <S.TextGenerationTotal>{value}</S.TextGenerationTotal>
          <S.TextMeasure>kW</S.TextMeasure>
        </S.ViewRowGenerationTotal>
      </S.ViewGenerationTotal>

      <S.ViewHigherLower>
        <S.ViewRow style={{ marginBottom: 4 }}>
          <S.TextHigherLower>MAX</S.TextHigherLower>
          <S.TextHigherLowerValue isHigher={isPrimary ? true : false}>
            {maxValue}
          </S.TextHigherLowerValue>
          <HigherSVG fill={isPrimary ? theme.colors.green : theme.colors.red} />
        </S.ViewRow>
        <S.ViewRow>
          <S.TextHigherLower>MIN</S.TextHigherLower>
          <S.TextHigherLowerValue isHigher={isPrimary ? false : true}>
            {minValue}
          </S.TextHigherLowerValue>
          <LowerSVG fill={isPrimary ? theme.colors.red : theme.colors.green} />
        </S.ViewRow>
      </S.ViewHigherLower>
    </S.ViewWrapper>
  );
}
