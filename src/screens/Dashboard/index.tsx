import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";
import { OneLineChart } from "../../components/Charts/OneLineChart";

import { useCondominium } from "../../hooks/useCondominium";

import { DateSelector } from "../../components/DateSelector";
import { Header } from "../../components/Header";
import {
  DropdownDataType,
  LocationDropdown,
} from "../../components/LocationDropdown";

import * as S from "./styles";
import {
  getFirstAndLastDayOfMonth,
  getLastMonth,
} from "../../utils/dateFunctions";
import { DevicesType } from "../../@types/types";

const initalDropdownValue: DropdownDataType = {
  id: "1",
  label: "Todos os condomínios",
  value: "all",
};

const startFirstValues = [0, 0, 0, 0, 0, 0];
const startValues = [0, 0, 0, 0, 0];

export function Dashboard() {
  const {
    condominiums,
    getGenerationsByLastMonths,
    getStationsById,
    getGenerationsByDays,
    getAllGenerationsByMonth,
  } = useCondominium();
  const [dropdownData, setDropdownData] = useState<DropdownDataType[]>([
    initalDropdownValue,
  ]);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [locationSelected, setLocationSelected] =
    useState<DropdownDataType>(initalDropdownValue);

  const [labelFirstChart, setlabelFirstChart] = useState<string[]>([]);
  const [valuesFirstChart, setValuesFirstChart] =
    useState<number[]>(startFirstValues);
  const [maxFirstChart, setMaxFirstChart] = useState(0);
  const [minFirstChart, setMinFirstChart] = useState(0);
  const [totalFirstChart, setTotalFirstChart] = useState(0);

  const [labelSecondChart, setlabelSecondChart] = useState<string[]>([]);
  const [valuesSecondChart, setValuesSecondChart] =
    useState<number[]>(startValues);
  const [maxSecondChart, setMaxSecondChart] = useState(0);
  const [minSecondChart, setMinSecondChart] = useState(0);

  const changeDate = (date: Date) => {
    date.setFullYear(2022);
    setDateSelected(date);
    getDataFirstChart(undefined, date);
    getDataSecondChart(undefined, date);
  };

  const changeLocation = (value: DropdownDataType) => {
    setLocationSelected(value);
    if (value.value === "all") {
      getDataSecondChart(undefined, undefined);
      getDataFirstChart(undefined, undefined);
    } else {
      getDataSecondChart(value.id, undefined);
      getDataFirstChart(value.id, undefined);
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

  const getDataFirstChart = async (
    locationChange: string | undefined,
    dateChange: Date | undefined
  ) => {
    let stations: DevicesType[] = [];
    let currentDate: Date = new Date();

    if (dateChange !== undefined) {
      currentDate = dateChange;
    }

    const firstAndLastDay = getFirstAndLastDayOfMonth(currentDate);
    setlabelFirstChart([
      "1",
      "7",
      "14",
      "21",
      "28",
      `${firstAndLastDay.lastDay.getDate()}`,
    ]);

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
      setMaxFirstChart(0);
      setMinFirstChart(0);
      setValuesFirstChart(startFirstValues);
      return;
    }

    let generations = await getGenerationsByDays(currentDate, stations);

    if (generations.length === 0) {
      setMaxFirstChart(0);
      setMinFirstChart(0);
      setValuesFirstChart(startFirstValues);
      return;
    }

    let stationIds = stations.map((e) => e.id);

    let totalGeneration = await getAllGenerationsByMonth(
      stationIds,
      firstAndLastDay
    );
    setTotalFirstChart(totalGeneration.generation);

    let max = Math.max(...generations);
    let min = Math.min(...generations);

    setMaxFirstChart(max);
    setMinFirstChart(min);
    setValuesFirstChart(generations);
  };

  const getDataSecondChart = async (
    locationChange: string | undefined,
    dateChange: Date | undefined
  ) => {
    let stations: DevicesType[] = [];
    let currentDate: Date = new Date();

    if (dateChange !== undefined) {
      currentDate = dateChange;
    }

    let lastMonths = getLastMonth(currentDate, 5);
    setlabelSecondChart(lastMonths);

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
      setMaxSecondChart(0);
      setMinSecondChart(0);
      setValuesSecondChart(startValues);
      return;
    }

    let lastGeneration = await getGenerationsByLastMonths(
      currentDate,
      5,
      stations
    );

    let max = Math.max(...lastGeneration);
    let min = Math.min(...lastGeneration);

    setMaxSecondChart(max);
    setMinSecondChart(min);
    setValuesSecondChart(lastGeneration);
  };

  useEffect(() => {
    const fetchData = async () => {
      getCondominiumsName();
      await getDataFirstChart(undefined, undefined);
      await getDataSecondChart(undefined, undefined);
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
          <Header title="Dashboard" />
          <S.TextSectionTitle>Dashboard</S.TextSectionTitle>

          <S.ViewRow>
            <LocationDropdown
              currentValue={locationSelected}
              data={dropdownData}
              onChange={changeLocation}
            />
            <S.ViewDivision />
            <DateSelector onChange={changeDate} currentDate={dateSelected} />
          </S.ViewRow>

          <ChartBox
            title="Geração solar"
            date="Mês atual"
            isCompleteInfo
            isOneInfo
            firstInfo={{
              title: "Geração total",
              value: `${totalFirstChart.toFixed(2)}`,
              maxValue: `${maxFirstChart.toFixed(2)}`,
              minValue: `${minFirstChart.toFixed(2)}`,
            }}
          >
            <OneLineChart values={valuesFirstChart} labelsX={labelFirstChart} />
          </ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total (kW)",
              maxValue: `${maxSecondChart.toFixed(2)}`,
              minValue: `${minSecondChart.toFixed(2)}`,
            }}
          >
            <OneLineChart
              values={valuesSecondChart}
              labelsX={labelSecondChart}
            />
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
