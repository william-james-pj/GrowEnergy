import React from "react";

import { useNavigation } from "@react-navigation/native";
import {
  CondominiumsNavigationProp,
  DevicesType,
} from "../../../../@types/types";

import { ButtonSmall } from "../../../../components/ButtonSmall";
import { getDailyGenerationByStation } from "../../../../utils/generationsFunctions";
import { useCondominiumSelected } from "../../../../hooks/useCondominiumSelected";

import { useDarkMode } from "../../../../hooks/userDarkMode";
import { useCondominium } from "../../../../hooks/useCondominium";

import BoltSVG from "../../../../assets/svg/BoltCondominium.svg";

import * as S from "./styles";

type CardDeviceProps = {
  station: DevicesType;
};

export function CardDevice({ station }: CardDeviceProps) {
  const { theme } = useDarkMode();
  const { generationThisMonth } = useCondominium();
  const { selectStation } = useCondominiumSelected();
  const navigation = useNavigation<CondominiumsNavigationProp>();

  const getGeneration = () => {
    let generation = getDailyGenerationByStation(
      [station],
      generationThisMonth
    );
    return `${generation} kW`;
  };

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextCondominiumName>{station.name}</S.TextCondominiumName>
        <S.TextDistrict>Hoje</S.TextDistrict>
      </S.ViewHeader>
      <S.ViewContent>
        <S.ViewGeneration>
          <S.ViewCicle>
            <BoltSVG fill={theme.colors.primary} />
          </S.ViewCicle>
          <S.ViewGenerationText>
            <S.TextGeneration>Geração total</S.TextGeneration>
            <S.TextGenerationValue>{getGeneration()}</S.TextGenerationValue>
          </S.ViewGenerationText>
        </S.ViewGeneration>

        <ButtonSmall
          text="Detalhe"
          onPress={() => {
            selectStation(station);
            navigation.navigate("SeeDevice");
          }}
        />
      </S.ViewContent>
    </S.ViewWrapper>
  );
}
