import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DateSelector } from "../../components/DateSelector";

import { Header } from "../../components/Header";
import {
  DropdownDataType,
  LocationDropdown,
} from "../../components/LocationDropdown";
import { BoxValueSaving } from "./components/BoxValueSaving";

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
    console.log(date);
  };

  const changeLocation = (value: DropdownDataType) => {
    setLocationSelected(value);
  };

  return (
    <S.ViewWrapper>
      <SafeAreaView>
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
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
