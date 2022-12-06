import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDarkMode } from "../../hooks/userDarkMode";
import { useCondominium } from "../../hooks/useCondominium";
import { useCondominiumSelected } from "../../hooks/useCondominiumSelected";

import { LoadingChart } from "../../components/LoadingChart";
import { Header } from "../../components/Header";
import { GenerationCard } from "./components/GenerationCard";
import { ChartBox } from "../../components/ChartBox";
import { OneLineChart } from "../../components/Charts/OneLineChart";
import { BarsChart } from "../../components/Charts/BarsChart";
import {
  getAllGeneration,
  getDailyGenerationByStation,
  getLastGenerationByDay,
} from "../../utils/generationsFunctions";
import { getDayOfWeek, getLastMonth } from "../../utils/dateFunctions";

import * as S from "./styles";

const startValues = [0, 0, 0, 0, 0];

export function SeeDevice() {
  const { theme } = useDarkMode();
  const { generationThisMonth, getGenerationsByLastMonths } = useCondominium();
  const { stationSelected } = useCondominiumSelected();

  const [dayliyGeneration, setDayliyGeneration] = useState(0);
  const [monthlyGeneration, setMonthlyGeneration] = useState(0);

  const [labelFirstChart, setlabelFirstChart] = useState<string[]>([]);
  const [valuesFirstChart, setValuesFirstChart] =
    useState<number[]>(startValues);
  const [maxFirstChart, setMaxFirstChart] = useState(0);
  const [minFirstChart, setMinFirstChart] = useState(0);

  const [labelSecondChart, setlabelSecondChart] = useState<string[]>([]);
  const [valuesSecondChart, setValuesSecondChart] =
    useState<number[]>(startValues);
  const [maxSecondChart, setMaxSecondChart] = useState(0);
  const [minSecondChart, setMinSecondChart] = useState(0);

  const [loadingFirstChart, setLoadingFirstChart] = useState(true);
  const [loadingSecondChart, setLoadingSecondChart] = useState(true);

  const getGenerations = () => {
    if (stationSelected === undefined) return;

    let dayliy = getDailyGenerationByStation(
      [stationSelected],
      generationThisMonth
    );

    let monthly = getAllGeneration([stationSelected], generationThisMonth);

    setDayliyGeneration(dayliy);
    setMonthlyGeneration(monthly);
  };

  const getDataFirstChart = () => {
    setLoadingFirstChart(true);
    if (stationSelected === undefined) {
      setLoadingFirstChart(false);
      return;
    }

    let dayOfWeek = getDayOfWeek(new Date(), 5);
    let lastGeneration = getLastGenerationByDay(
      new Date(),
      5,
      generationThisMonth,
      stationSelected.id
    );

    let max = Math.max(...lastGeneration);
    let min = Math.min(...lastGeneration);

    setMaxFirstChart(max);
    setMinFirstChart(min);
    setlabelFirstChart(dayOfWeek);
    setValuesFirstChart(lastGeneration);
    setLoadingFirstChart(false);
  };

  const getDataSecondChart = async () => {
    setLoadingSecondChart(true);
    if (stationSelected === undefined) {
      setLoadingSecondChart(false);
      return;
    }

    let lastMonths = getLastMonth(new Date(), 5);

    let lastGeneration = await getGenerationsByLastMonths(new Date(), 5, [
      stationSelected,
    ]);

    let max = Math.max(...lastGeneration);
    let min = Math.min(...lastGeneration);

    setMaxSecondChart(max);
    setMinSecondChart(min);
    setlabelSecondChart(lastMonths);
    setValuesSecondChart(lastGeneration);
    setLoadingSecondChart(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        getGenerations(),
        getDataFirstChart(),
        getDataSecondChart(),
      ]);
    };

    fetchData().catch(console.error);

    return () => {};
  }, []);

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
          <Header title={stationSelected?.name} back={true} />
          <S.TextSectionTitle>Geração total</S.TextSectionTitle>
          <GenerationCard
            dayliy={dayliyGeneration}
            monthly={monthlyGeneration}
          />
          <S.TextSectionTitle>Performace</S.TextSectionTitle>
          <ChartBox
            title="Geração solar"
            date="Últimos dias"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total (kW)",
              maxValue: `${maxFirstChart}`,
              minValue: `${minFirstChart}`,
            }}
          >
            {loadingFirstChart || loadingSecondChart ? (
              <LoadingChart />
            ) : (
              <BarsChart values={valuesFirstChart} labelsX={labelFirstChart} />
            )}
          </ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total (kW)",
              maxValue: `${maxSecondChart}`,
              minValue: `${minSecondChart}`,
            }}
          >
            {loadingFirstChart || loadingSecondChart ? (
              <LoadingChart />
            ) : (
              <OneLineChart
                values={valuesSecondChart}
                labelsX={labelSecondChart}
              />
            )}
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
