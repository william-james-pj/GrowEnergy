import React from "react";

import { useNavigation } from "@react-navigation/native";
import { CondominiumsNavigationProp } from "../../../../@types/types";

import { ButtonSmall } from "../../../../components/ButtonSmall";
import { useDarkMode } from "../../../../hooks/userDarkMode";
import { useCondominiumSelected } from "../../../../hooks/useCondominiumSelected";
import { useCondominium } from "../../../../hooks/useCondominium";
import { getDailyGenerationByStation } from "../../../../utils/generationsFunctions";

import BoltSVG from "../../../../assets/svg/BoltCondominium.svg";

import { CondominiumsType } from "../../../../@types/types";

import * as S from "./styles";

type CardCondominiumsProps = {
  condominium: CondominiumsType;
};

export function CardCondominiums({ condominium }: CardCondominiumsProps) {
  const { theme } = useDarkMode();
  const { generationThisMonth } = useCondominium();
  const { selectCondominium } = useCondominiumSelected();
  const navigation = useNavigation<CondominiumsNavigationProp>();

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextCondominiumName>{condominium.name}</S.TextCondominiumName>
        <S.TextDistrict>{condominium.address}</S.TextDistrict>
      </S.ViewHeader>
      <S.ViewContent>
        <S.ViewGeneration>
          <S.ViewCicle>
            <BoltSVG fill={theme.colors.primary} />
          </S.ViewCicle>
          <S.ViewGenerationText>
            <S.TextGeneration>Geração total</S.TextGeneration>
            <S.TextGenerationValue>
              {getDailyGenerationByStation(
                condominium.stations,
                generationThisMonth
              ) + " kW"}
            </S.TextGenerationValue>
          </S.ViewGenerationText>
        </S.ViewGeneration>

        <ButtonSmall
          text="Detalhe"
          onPress={() => {
            selectCondominium(condominium);
            navigation.navigate("SeeCondominium");
          }}
        />
      </S.ViewContent>
    </S.ViewWrapper>
  );
}
