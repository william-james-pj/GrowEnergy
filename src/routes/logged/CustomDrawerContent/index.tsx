import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components";

import {
  DrawerContentComponentProps,
  DrawerItem,
} from "@react-navigation/drawer";

import { RectButton } from "react-native-gesture-handler";

import { IconColorMode } from "../../../components/IconColorMode";

import LogOutSvg from "../../../assets/svg/LogOut.svg";
import HomeMenuSvg from "../../../assets/svg/HomeMenu.svg";
import UsersMenuSvg from "../../../assets/svg/UsersMenu.svg";

import { useAuth } from "../../../hooks/useAuth";

import * as S from "./styles";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const routerName = props.state.routeNames;
  const theme = useTheme();
  const { logout } = useAuth();

  const styles = StyleSheet.create({
    buttonLogOut: {
      flex: 1,
      paddingVertical: 8,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    drawerItem: {
      width: "80%",
      borderRadius: 20,
      marginBottom: 16,
    },
  });

  return (
    <S.Wrapper style={{ flex: 1 }}>
      <S.ViewHeader>
        <S.ViewUserRow>
          <S.ViewUserInfo>
            <S.ViewUserImgBox></S.ViewUserImgBox>
            <S.TextUserName>User name</S.TextUserName>
          </S.ViewUserInfo>
          <IconColorMode />
        </S.ViewUserRow>

        <S.ViewContent>
          <DrawerItem
            style={styles.drawerItem}
            activeBackgroundColor={theme.colors.primaryOpacity}
            inactiveBackgroundColor={theme.colors.background}
            focused={routerName[props.state.index] === "Home"}
            onPress={() => props.navigation.navigate("Home")}
            icon={({ focused }) => (
              <S.ViewIconMenu>
                <HomeMenuSvg
                  fill={focused ? theme.colors.text : theme.colors.disabled}
                />
              </S.ViewIconMenu>
            )}
            label={({ focused }) => (
              <S.TextRouterName isActive={focused}>Home</S.TextRouterName>
            )}
          />

          <DrawerItem
            style={styles.drawerItem}
            activeBackgroundColor={theme.colors.primaryOpacity}
            inactiveBackgroundColor={theme.colors.background}
            focused={routerName[props.state.index] === "Users"}
            onPress={() => props.navigation.navigate("Users")}
            icon={({ focused }) => (
              <S.ViewIconMenu>
                <UsersMenuSvg
                  fill={focused ? theme.colors.text : theme.colors.disabled}
                />
              </S.ViewIconMenu>
            )}
            label={({ focused }) => (
              <S.TextRouterName isActive={focused}>Usuários</S.TextRouterName>
            )}
          />
        </S.ViewContent>
      </S.ViewHeader>

      <S.ViewFooter>
        <RectButton onPress={() => logout()} style={styles.buttonLogOut}>
          <LogOutSvg fill={theme.colors.disabled} />
          <S.TextLogOut>Sair</S.TextLogOut>
        </RectButton>
      </S.ViewFooter>
    </S.Wrapper>
  );
}
