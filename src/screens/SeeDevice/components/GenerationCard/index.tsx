import React from "react";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import PlugBoltSVG from "../../../../assets/svg/PlugBolt.svg";
import TransformerBoltSVG from "../../../../assets/svg/Transformer.svg";

import * as S from "./styles";

type GenerationCardBox = {};

export function GenerationCard({}: GenerationCardBox) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <PlugBoltSVG fill={theme.colors.primary} />
      <S.ViewInfoBox>
        <S.TextDate>Hoje</S.TextDate>
        <S.TextValue>10 kW</S.TextValue>
      </S.ViewInfoBox>

      <S.ViewLine />

      <TransformerBoltSVG fill={theme.colors.primary} />
      <S.ViewInfoBox>
        <S.TextDate>Esse mês</S.TextDate>
        <S.TextValue>700 kW</S.TextValue>
      </S.ViewInfoBox>
    </S.ViewWrapper>
  );
}
