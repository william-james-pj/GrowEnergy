import React, { useState } from "react";

import { DateSelector } from "../../components/DateSelector";
import { Header } from "../../components/Header";

import * as S from "./styles";

export function Dashboard() {
  const [dateSelected, setDateSelected] = useState(new Date());

  const changeDate = (date: Date) => {
    setDateSelected(date);
  };

  return (
    <S.ViewWrapper>
      <Header title="Dashboard" />
      <S.TextSectionTitle>Dashboard</S.TextSectionTitle>

      <S.ViewRow>
        <DateSelector onChange={changeDate} />
      </S.ViewRow>
    </S.ViewWrapper>
  );
}
