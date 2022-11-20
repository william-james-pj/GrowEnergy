import React from "react";
import { CondominiumsType } from "../../../../@types/types";
import { CondominiumCell } from "../CondominiumCell";

import { CondominiumHeader } from "../CondominiumHeader";

import * as S from "./styles";

type CondominiumTableProps = {
  condominium: CondominiumsType[];
  removePress: (condominium: CondominiumsType) => void;
};

export function CondominiumTable({
  condominium,
  removePress,
}: CondominiumTableProps) {
  return (
    <S.ViewWrapper>
      <CondominiumHeader />
      {condominium.length === 0 ? (
        <S.TextEmpty>Nenhum condomínio adicionado</S.TextEmpty>
      ) : (
        condominium.map((e) => (
          <CondominiumCell key={e.id} item={e} removePress={removePress} />
        ))
      )}
    </S.ViewWrapper>
  );
}
