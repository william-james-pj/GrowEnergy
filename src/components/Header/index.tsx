import React from "react";

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

  function openMenu() {
    usenavigation.openDrawer();
  }

  function clickGoBack() {}

  return (
    <S.ViewContainer>
      <S.ButtonContainer>
        <RectButton
          onPress={back ? clickGoBack : openMenu}
          style={{ padding: 5, zIndex: 5 }}
        >
          {back ? <S.GoBack /> : <S.BarMenu />}
        </RectButton>
      </S.ButtonContainer>
      <S.Title>{title}</S.Title>
    </S.ViewContainer>
  );
}
