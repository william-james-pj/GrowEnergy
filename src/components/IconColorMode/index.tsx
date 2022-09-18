import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useDarkMode } from "../../hooks/userDarkMode";

import MoonSVG from "../../assets/svg/Moon.svg";
import SunSVG from "../../assets/svg/Sun.svg";

import * as S from "./styles";

export function IconColorMode() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <S.ModeButtonView>
      <RectButton
        onPress={toggleTheme}
        style={{ padding: 5, borderRadius: 20 }}
      >
        {theme.title === "light" ? (
          <MoonSVG fill={theme.colors.text} />
        ) : (
          <SunSVG fill={theme.colors.text} />
        )}
      </RectButton>
      <StatusBar style={theme.title === "light" ? "dark" : "light"} />
    </S.ModeButtonView>
  );
}
