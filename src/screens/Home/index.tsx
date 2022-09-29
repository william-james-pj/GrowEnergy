import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components/Header";
import { BoxEnergySaving } from "./components/BoxEnergySaving";
import { CardOverview } from "./components/CardOverview";

import * as S from "./styles";

export function Home() {
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
            valueToday={8.71}
            valueMonth={90.87}
          />
          <CardOverview
            title={"Consumo total"}
            valueToday={5.32}
            valueMonth={70.53}
          />
        </S.ViewOverviewRow>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
