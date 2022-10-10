import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { GenerationCard } from "./components/GenerationCard";
import { ChartBox } from "../../components/ChartBox";
import { OneLineChart } from "../../components/Charts/OneLineChart";
import { BarsChart } from "../../components/Charts/BarsChart";

import * as S from "./styles";

export function SeeDevice() {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          bounces={false}
        >
          <Header title="Dispositivo 1" back={true} />
          <S.TextSectionTitle>Geração total</S.TextSectionTitle>
          <GenerationCard />
          <S.TextSectionTitle>Performace</S.TextSectionTitle>
          <ChartBox
            title="Geração solar"
            date="Últimos dias"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total",
              maxValue: "100",
              minValue: "85",
            }}
          >
            <BarsChart
              values={[90, 95, 85, 100, 90, 95]}
              labelsX={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
            />
          </ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total",
              maxValue: "320",
              minValue: "290",
            }}
          >
            <OneLineChart
              values={[300, 310, 290, 310, 320]}
              labelsX={["Abr", "Maio", "Jun", "Jul", "Ago"]}
            />
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
