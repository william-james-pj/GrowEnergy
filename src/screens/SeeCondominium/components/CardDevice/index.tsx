import React from "react";

import { useNavigation } from "@react-navigation/native";
import { CondominiumsNavigationProp } from "../../../../@types/types";

import { ButtonSmall } from "../../../../components/ButtonSmall";
import { useDarkMode } from "../../../../hooks/userDarkMode";

import BoltSVG from "../../../../assets/svg/BoltCondominium.svg";

import * as S from "./styles";

export function CardDevice() {
  const { theme } = useDarkMode();
  const navigation = useNavigation<CondominiumsNavigationProp>();

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextCondominiumName>Dispositivo 1</S.TextCondominiumName>
        <S.TextDistrict>Hoje</S.TextDistrict>
      </S.ViewHeader>
      <S.ViewContent>
        <S.ViewGeneration>
          <S.ViewCicle>
            <BoltSVG fill={theme.colors.primary} />
          </S.ViewCicle>
          <S.ViewGenerationText>
            <S.TextGeneration>Geração total</S.TextGeneration>
            <S.TextGenerationValue>10 kW</S.TextGenerationValue>
          </S.ViewGenerationText>
        </S.ViewGeneration>

        <ButtonSmall text="Detalhe" onPress={() => {}} />
      </S.ViewContent>
    </S.ViewWrapper>
  );
}
