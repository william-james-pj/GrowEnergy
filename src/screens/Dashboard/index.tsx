import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";
import { TwoLineChart } from "../../components/Charts/TwoLineChart";

import { DateSelector } from "../../components/DateSelector";
import { Header } from "../../components/Header";
import {
  DropdownDataType,
  LocationDropdown,
} from "../../components/LocationDropdown";

import * as S from "./styles";

const initalDropdownValue: DropdownDataType = {
  id: "1",
  label: "Todos os condomínios",
  value: "all",
};

const dropdownData: DropdownDataType[] = [
  initalDropdownValue,
  { id: "2", label: "Condomínio 1", value: "" },
];

export function Dashboard() {
  const [dateSelected, setDateSelected] = useState(new Date());
  const [locationSelected, setLocationSelected] =
    useState<DropdownDataType>(initalDropdownValue);

  const changeDate = (date: Date) => {
    setDateSelected(date);
  };

  const changeLocation = (value: DropdownDataType) => {
    setLocationSelected(value);
  };

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
            <DateSelector onChange={changeDate} />
          </S.ViewRow>

          <ChartBox
            title="Geração solar"
            date="Mês atual"
            isCompleteInfo
            firstInfo={{
              title: "Geração total",
              value: "80,45",
              maxValue: "48",
              minValue: "40",
            }}
            secondInfo={{
              title: "Consumo total",
              value: "60,18",
              maxValue: "38",
              minValue: "30",
            }}
          >
            <TwoLineChart
              firstValues={[43, 40, 48, 41, 43, 48]}
              secundaryValues={[30, 32, 33, 30, 38, 33]}
              labelsX={["1", "7", "14", "21", "28", "31"]}
            />
          </ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            firstInfo={{
              title: "Geração total (kW)",
              maxValue: "580",
              minValue: "520",
            }}
            secondInfo={{
              title: "Consumo total (kW)",
              maxValue: "520",
              minValue: "440",
            }}
          >
            <TwoLineChart
              firstValues={[570, 560, 520, 540, 570]}
              secundaryValues={[460, 440, 480, 460, 490]}
              labelsX={["Abr", "Maio", "Jun", "Jul", "Ago"]}
            />
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
