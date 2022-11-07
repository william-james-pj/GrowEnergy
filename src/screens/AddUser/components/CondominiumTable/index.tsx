import React from "react";
import { CondominiumCell } from "../CondominiumCell";

import { CondominiumHeader } from "../CondominiumHeader";

import * as S from "./styles";

export function CondominiumTable() {
  return (
    <S.ViewWrapper>
      <CondominiumHeader />
      <CondominiumCell />
      <CondominiumCell />
    </S.ViewWrapper>
  );
}
