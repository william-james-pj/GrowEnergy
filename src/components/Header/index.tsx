import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerScreenProps } from "../../@types/types";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

interface HeaderProps {
  title?: string;
  back?: boolean;
}

export function Header({ title = "GrowTech", back = false }: HeaderProps) {
  const usenavigation = useNavigation<DrawerScreenProps>();
  const navigation = useNavigation();

  function openMenu() {
    usenavigation.openDrawer();
  }

  function clickGoBack() {
    navigation.goBack();
  }

  return (
    <S.ViewContainer style={{ marginTop: StatusBar.currentHeight }}>
      <S.ButtonContainer>
        <RectButton
          onPress={back ? clickGoBack : openMenu}
          style={{ padding: 5, zIndex: 5, borderRadius: 8 }}
        >
          {back ? <S.GoBack /> : <S.BarMenu />}
        </RectButton>
      </S.ButtonContainer>
      <S.Title>{title}</S.Title>
    </S.ViewContainer>
  );
}
