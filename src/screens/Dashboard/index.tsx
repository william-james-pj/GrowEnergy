import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView>
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
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
