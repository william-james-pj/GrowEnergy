import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";
import { OneLineChart } from "../../components/Charts/OneLineChart";

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
            isOneInfo
            firstInfo={{
              title: "Geração total",
              value: "80,45",
              maxValue: "48",
              minValue: "40",
            }}
          >
            <OneLineChart
              values={[43, 40, 48, 41, 43, 48]}
              labelsX={["1", "7", "14", "21", "28", "31"]}
            />
          </ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            isOneInfo
            firstInfo={{
              title: "Geração total (kW)",
              maxValue: "580",
              minValue: "520",
            }}
          >
            <OneLineChart
              values={[570, 560, 520, 540, 570]}
              labelsX={["Abr", "Maio", "Jun", "Jul", "Ago"]}
            />
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
