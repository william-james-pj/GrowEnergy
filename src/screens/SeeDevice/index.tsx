import React, { useRef } from "react";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { GenerationCard } from "./components/GenerationCard";

import * as S from "./styles";

export function SeeDevice() {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <Header title="Dispositivo 1" back={true} />
      <S.TextSectionTitle>Geração total</S.TextSectionTitle>
      <GenerationCard />
      <S.TextSectionTitle>Performace</S.TextSectionTitle>
    </S.ViewWrapper>
  );
}
