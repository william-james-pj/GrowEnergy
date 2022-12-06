import React from "react";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import PlugBoltSVG from "../../../../assets/svg/PlugBolt.svg";
import TransformerBoltSVG from "../../../../assets/svg/Transformer.svg";

import * as S from "./styles";

type GenerationCardBox = {
  dayliy: number;
  monthly: number;
};

export function GenerationCard({ dayliy, monthly }: GenerationCardBox) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <PlugBoltSVG fill={theme.colors.primary} />
      <S.ViewInfoBox>
        <S.TextDate>Hoje</S.TextDate>
        <S.TextValue>{`${dayliy} kW`}</S.TextValue>
      </S.ViewInfoBox>

      <S.ViewLine />

      <TransformerBoltSVG fill={theme.colors.primary} />
      <S.ViewInfoBox>
        <S.TextDate>Esse mês</S.TextDate>
        <S.TextValue>{`${monthly} kW`}</S.TextValue>
      </S.ViewInfoBox>
    </S.ViewWrapper>
  );
}
