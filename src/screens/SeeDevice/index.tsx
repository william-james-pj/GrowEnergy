import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { GenerationCard } from "./components/GenerationCard";

import * as S from "./styles";

export function SeeDevice() {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <SafeAreaView>
        <Header title="Dispositivo 1" back={true} />
        <S.TextSectionTitle>Geração total</S.TextSectionTitle>
        <GenerationCard />
        <S.TextSectionTitle>Performace</S.TextSectionTitle>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
