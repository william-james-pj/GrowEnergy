import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GenerationType } from "../../@types/types";

import { Header } from "../../components/Header";
import { useCondominium } from "../../hooks/useCondominium";
import { BoxEnergySaving } from "./components/BoxEnergySaving";
import { CardOverview } from "./components/CardOverview";

import * as S from "./styles";

export function Home() {
  const { get, generationDay, generationMonth } = useCondominium();

  useEffect(() => {
    const fetchData = async () => {
      await get();
    };

    fetchData().catch(console.error);

    return () => {};
  }, []);

  return (
    <S.ViewWrapper>
      <SafeAreaView>
        <Header title="Home" />
        <S.TextSectionTitle>Bem vindo de volta</S.TextSectionTitle>
        <BoxEnergySaving />
        <S.TextSectionTitle>Overview</S.TextSectionTitle>
        <S.ViewOverviewRow>
          <CardOverview
            title={"Geração total"}
            valueToday={generationDay}
            valueMonth={generationMonth}
          />
        </S.ViewOverviewRow>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
