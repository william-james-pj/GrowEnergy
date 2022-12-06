import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";
import { DateSelector } from "../../components/DateSelector";
import { getLastMonth, getMonthName } from "../../utils/dateFunctions";
import { LoadingChart } from "../../components/LoadingChart";

import { Header } from "../../components/Header";
import { BoxValueSaving } from "./components/BoxValueSaving";
import { OneLineChart } from "../../components/Charts/OneLineChart";
import {
  DropdownDataType,
  LocationDropdown,
} from "../../components/LocationDropdown";
import { DevicesType } from "../../@types/types";

import { energyTax } from "../../constants/energyTax";
import { useCondominium } from "../../hooks/useCondominium";

import * as S from "./styles";

const initalDropdownValue: DropdownDataType = {
  id: "1",
  label: "Todos os condomínios",
  value: "all",
};

const startFirstValues = [0, 0, 0, 0, 0];

export function EnergySaving() {
  const {
    generationMonth,
    condominiums,
    getStationsById,
    getGenerationsByLastMonths,
    getAllGenerationsByYear,
  } = useCondominium();

  const [dropdownData, setDropdownData] = useState<DropdownDataType[]>([
    initalDropdownValue,
  ]);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [locationSelected, setLocationSelected] =
    useState<DropdownDataType>(initalDropdownValue);

  const [tax, setTax] = useState(energyTax);
  const [currentMothGeneration, setCurrentMothGeneration] = useState(0);
  const [selectedMothGeneration, setSelectedMothGeneration] = useState(0);
  const [selectedYearGeneration, setSelectedYearGeneration] = useState(0);

  const [labelFirstChart, setlabelFirstChart] = useState<string[]>([]);
  const [valuesFirstChart, setValuesFirstChart] =
    useState<number[]>(startFirstValues);
  const [maxFirstChart, setMaxFirstChart] = useState(0);
  const [minFirstChart, setMinFirstChart] = useState(0);

  const [loadingFirstChart, setLoadingFirstChart] = useState(true);

  const changeDate = (date: Date) => {
    setDateSelected(date);
    getDataFirstChart(undefined, date);
  };

  const changeLocation = (value: DropdownDataType) => {
    setLocationSelected(value);
    if (value.value === "all") {
      getDataFirstChart(undefined, dateSelected);
    } else {
      getDataFirstChart(value.id, dateSelected);
      getGenerationByYear(value.id);
    }
  };

  const getCondominiumsName = () => {
    let names: { name: string; id: string }[] = condominiums.map((e) => ({
      name: e.name,
      id: e.id,
    }));

    if (names.length === 0) {
      setDropdownData([
        {
          id: "1",
          label: "Nenhum condomínio",
          value: "null",
        },
      ]);
    }

    let datas: DropdownDataType[] = [initalDropdownValue];
    names.forEach((e) => {
      datas.push({
        id: e.id,
        label: e.name,
        value: e.id,
      });
    });

    setDropdownData(datas);
  };

  const getCurrentMonthGeneration = () => {
    setCurrentMothGeneration(generationMonth * tax);
  };

  const defaultFirstChartValue = () => {
    setSelectedMothGeneration(0);
    setMaxFirstChart(0);
    setMinFirstChart(0);
    setValuesFirstChart(startFirstValues);
  };

  const getDataFirstChart = async (
    locationChange: string | undefined,
    dateChange: Date | undefined
  ) => {
    setLoadingFirstChart(true);
    defaultFirstChartValue();
    let stations: DevicesType[] = [];
    let currentDate: Date = new Date();

    if (dateChange !== undefined) {
      currentDate = dateChange;
    }

    let lastMonths = getLastMonth(currentDate, 5);
    setlabelFirstChart(lastMonths);

    if (locationChange !== undefined) {
      //Selecionou um condominio
      let stationsAux = await getStationsById(locationChange);
      if (stationsAux.length !== 0) {
        stations = stationsAux;
      }
    } else {
      //Todos os condominio
      condominiums.forEach((e) => stations.push(...e.stations));
    }

    if (stations.length === 0) {
      defaultFirstChartValue();
      setLoadingFirstChart(false);
      return;
    }

    let lastGeneration = await getGenerationsByLastMonths(
      currentDate,
      5,
      stations
    );

    let lastSaving = lastGeneration.map((e) => e * tax);

    if (lastSaving.length === 0) {
      defaultFirstChartValue();
      setLoadingFirstChart(false);
      return;
    }

    setSelectedMothGeneration(lastSaving[lastSaving.length - 1]);

    let max = Math.max(...lastSaving);
    let min = Math.min(...lastSaving);

    setMaxFirstChart(max);
    setMinFirstChart(min);
    setValuesFirstChart(lastSaving);
    setLoadingFirstChart(false);
  };

  const getGenerationByYear = async (locationChange: string | undefined) => {
    setSelectedYearGeneration(0);
    let stations: DevicesType[] = [];
    let currentDate: Date = new Date();

    if (locationChange !== undefined) {
      //Selecionou um condominio
      let stationsAux = await getStationsById(locationChange);
      if (stationsAux.length !== 0) {
        stations = stationsAux;
      }
    } else {
      condominiums.forEach((e) => stations.push(...e.stations));
    }

    if (stations.length === 0) {
      setSelectedYearGeneration(0);
      return;
    }
    ("");

    let stationIds = stations.map((e) => e.id);

    let yearGeneration = await getAllGenerationsByYear(stationIds, currentDate);

    setSelectedYearGeneration(yearGeneration);
  };

  useEffect(() => {
    getCondominiumsName();
    getCurrentMonthGeneration();

    const fetchData = async () => {
      await Promise.all([
        getDataFirstChart(undefined, undefined),
        getGenerationByYear(undefined),
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
          <Header title="Economia de energia" back={true} />
          <S.ViewRow style={{ marginTop: 32 }}>
            <BoxValueSaving
              title={`Total economizado\nno mês atual`}
              value={currentMothGeneration.toFixed(2)}
            />
            <BoxValueSaving
              title={`Tarifa de energia\nelétrica`}
              value={`${tax}`}
              isSecudary={true}
            />
          </S.ViewRow>
          <S.TextSection>Overview</S.TextSection>
          <S.ViewOptions>
            <LocationDropdown
              currentValue={locationSelected}
              data={dropdownData}
              onChange={changeLocation}
            />
            <S.ViewDivision />
            <DateSelector onChange={changeDate} currentDate={dateSelected} />
          </S.ViewOptions>
          <S.ViewRow style={{ marginTop: 16 }}>
            <BoxValueSaving
              title={`Economia de\nenergia`}
              value={selectedMothGeneration.toFixed(2)}
              date={getMonthName(dateSelected)}
            />
            <BoxValueSaving
              title={`Economia de\nenergia`}
              value={selectedYearGeneration.toFixed(2)}
              date={"2022"}
            />
          </S.ViewRow>

          <S.ViewSeparator />
          <ChartBox
            title="Economia de energia"
            date="Últimos meses"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Economia total (R$)",
              maxValue: maxFirstChart.toFixed(2),
              minValue: minFirstChart.toFixed(2),
            }}
          >
            {loadingFirstChart ? (
              <LoadingChart />
            ) : (
              <OneLineChart
                values={valuesFirstChart}
                labelsX={labelFirstChart}
              />
            )}
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
