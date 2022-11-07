import React from "react";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import HigherSVG from "../../../../assets/svg/Higher.svg";
import LowerSVG from "../../../../assets/svg/Lower.svg";

import * as S from "./styles";

type BasicInfoProps = {
  title: string;
  maxValue: string;
  minValue: string;
  isPrimary: boolean;
};

export function BasicInfo({
  title,
  maxValue,
  minValue,
  isPrimary,
}: BasicInfoProps) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <S.ViewCiclerContainer>
        <S.ViewCicler isPrimary={isPrimary}></S.ViewCicler>
      </S.ViewCiclerContainer>

      <S.ViewGeneration>
        <S.TextGeneration>{title}</S.TextGeneration>

        <S.ViewHigherLower>
          <S.ViewRow>
            <S.TextHigherLower>MAX</S.TextHigherLower>
            <S.TextHigherLowerValue isHigher={isPrimary ? true : false}>
              {maxValue}
            </S.TextHigherLowerValue>
            <HigherSVG
              fill={isPrimary ? theme.colors.green : theme.colors.red}
            />
          </S.ViewRow>
          <S.ViewRow>
            <S.TextHigherLower>MIN</S.TextHigherLower>
            <S.TextHigherLowerValue isHigher={isPrimary ? false : true}>
              {minValue}
            </S.TextHigherLowerValue>
            <LowerSVG
              fill={isPrimary ? theme.colors.red : theme.colors.green}
            />
          </S.ViewRow>
        </S.ViewHigherLower>
      </S.ViewGeneration>
    </S.ViewWrapper>
  );
}
