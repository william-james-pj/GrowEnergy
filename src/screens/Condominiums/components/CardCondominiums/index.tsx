import React from "react";

import { useNavigation } from "@react-navigation/native";
import { CondominiumsNavigationProp } from "../../../../@types/types";

import { ButtonSmall } from "../../../../components/ButtonSmall";
import { useDarkMode } from "../../../../hooks/userDarkMode";

import BoltSVG from "../../../../assets/svg/BoltCondominium.svg";

import * as S from "./styles";

export function CardCondominiums() {
  const { theme } = useDarkMode();
  const navigation = useNavigation<CondominiumsNavigationProp>();

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextCondominiumName>Condomínio 1</S.TextCondominiumName>
        <S.TextDistrict>Sorocaba - Bairro x</S.TextDistrict>
      </S.ViewHeader>
      <S.ViewContent>
        <S.ViewGeneration>
          <S.ViewCicle>
            <BoltSVG fill={theme.colors.primary} />
          </S.ViewCicle>
          <S.ViewGenerationText>
            <S.TextGeneration>Geração total</S.TextGeneration>
            <S.TextGenerationValue>30 kW</S.TextGenerationValue>
          </S.ViewGenerationText>
        </S.ViewGeneration>

        <ButtonSmall
          text="Detalhe"
          onPress={() => {
            navigation.navigate("SeeCondominium");
          }}
        />
      </S.ViewContent>
    </S.ViewWrapper>
  );
}
