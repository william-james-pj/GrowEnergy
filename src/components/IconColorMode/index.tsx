import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useDarkMode } from "../../hooks/userDarkMode";

import MoonSVG from "../../assets/svg/Moon.svg";

import * as S from "./styles";

export function IconColorMode() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <S.ModeButtonView>
      <RectButton onPress={toggleTheme}>
        <MoonSVG />
      </RectButton>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
    </S.ModeButtonView>
  );
}
