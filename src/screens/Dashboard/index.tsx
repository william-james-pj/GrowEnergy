import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";

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
          ></ChartBox>
          <S.ViewSeparator />
          <ChartBox
            title="Geração solar"
            date="Últimos meses"
            isCompleteInfo={false}
            firstInfo={{
              title: "Geração total",
              maxValue: "580",
              minValue: "520",
            }}
            secondInfo={{
              title: "Consumo total",
              maxValue: "520",
              minValue: "440",
            }}
          ></ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
