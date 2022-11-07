import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChartBox } from "../../components/ChartBox";
import { DateSelector } from "../../components/DateSelector";

import { Header } from "../../components/Header";
import { BoxValueSaving } from "./components/BoxValueSaving";
import { OneLineChart } from "../../components/Charts/OneLineChart";
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

export function EnergySaving() {
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
          <Header title="Economia de energia" back={true} />
          <S.ViewRow style={{ marginTop: 32 }}>
            <BoxValueSaving
              title={`Total economizado\nno mês atual`}
              value={200.8}
            />
            <BoxValueSaving
              title={`Tarifa de energia\nelétrica`}
              value={0.594}
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
            <DateSelector onChange={changeDate} />
          </S.ViewOptions>
          <S.ViewRow style={{ marginTop: 16 }}>
            <BoxValueSaving
              title={`Economia de\nenergia`}
              value={200.8}
              date={"Ago"}
            />
            <BoxValueSaving
              title={`Economia de\nenergia`}
              value={1406.4}
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
              maxValue: "215",
              minValue: "195",
            }}
          >
            <OneLineChart
              values={[200, 180, 220, 230, 200]}
              labelsX={["Abr", "Maio", "Jun", "Jul", "Ago"]}
            />
          </ChartBox>
          <S.ViewFooter />
        </ScrollView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
