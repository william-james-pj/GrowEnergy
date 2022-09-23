import React, { useState } from "react";

import { Header } from "../../components/Header";
import { BoxValueSaving } from "./components/BoxValueSaving";

import * as S from "./styles";

export function EnergySaving() {
  return (
    <S.ViewWrapper>
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
      <S.ViewRow></S.ViewRow>
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
    </S.ViewWrapper>
  );
}
