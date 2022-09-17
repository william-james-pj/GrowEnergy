import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";
import { RectButton } from "react-native-gesture-handler";

import { IconColorMode } from "../../../components/IconColorMode";
import { useAuth } from "../../../hooks/useAuth";
import LogOutSvg from "../../../assets/svg/LogOut.svg";

import * as S from "./styles";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const theme = useTheme();
  const { logout } = useAuth();

  return <S.Wrapper style={{ flex: 1 }}></S.Wrapper>;
}
