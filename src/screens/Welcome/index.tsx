import React from "react";

import WelcomeSVG from "../../assets/svg/Welcome.svg";

import { ButtonLarge } from "../../components/ButtonLarge";

import { useNavigation } from "@react-navigation/native";
import { LogoutNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Welcome() {
  const usenavigation = useNavigation<LogoutNavigationProp>();

  return (
    <S.Wrapper>
      <S.Header>
        <WelcomeSVG />
        <S.TextContainer>
          <S.Title>GrowEnergy</S.Title>
          <S.SubTitle>Gerencie sua geração de energia solar</S.SubTitle>
        </S.TextContainer>
        <ButtonLarge
          onPress={() => {
            usenavigation.navigate("Login");
          }}
          text={"Iniciar"}
        />
      </S.Header>
    </S.Wrapper>
  );
}
