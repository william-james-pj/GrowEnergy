import React from "react";

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import SolarPanelSvg from "../../../../assets/svg/SolarPanel.svg";
import ArrowRightSvg from "../../../../assets/svg/ArrowRightEnergySaving.svg";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import { HomeNavigationProp } from "../../../../@types/types";

import * as S from "./styles";

export function BoxEnergySaving() {
  const { theme } = useDarkMode();
  const navigation = useNavigation<HomeNavigationProp>();

  const styles = StyleSheet.create({
    button: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 8,
      zIndex: 99,
    },
  });

  return (
    <S.ViewWrapper>
      <RectButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("EnergySaving");
        }}
      ></RectButton>
      <S.ViewHeader>
        <S.ViewText>
          <S.TextTitle>
            Total economizado com a{"\n"}geração de energia
          </S.TextTitle>
          <S.ViewValueRow>
            <S.TextCurrency>R$</S.TextCurrency>
            <S.TextValue>220,80</S.TextValue>
          </S.ViewValueRow>
        </S.ViewText>

        <S.ViewImg>
          <SolarPanelSvg />
        </S.ViewImg>
      </S.ViewHeader>

      <S.ViewFooter>
        <S.TextDate>Agosto - 2022</S.TextDate>
        <S.ViewDetailsRow>
          <S.TextDetails>Ver mais de detalhes</S.TextDetails>
          <ArrowRightSvg fill={theme.colors.text} />
        </S.ViewDetailsRow>
      </S.ViewFooter>
    </S.ViewWrapper>
  );
}
