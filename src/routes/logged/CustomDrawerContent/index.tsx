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
import UsersSvg from "../../../assets/svg/User.svg";

import { useAuth } from "../../../hooks/useAuth";

import * as S from "./styles";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const routerName = props.state.routeNames;
  const theme = useTheme();
  const { logout, user } = useAuth();

  const getName = (): string => {
    if (user?.displayName) {
      let name = user.displayName.split(" ");
      return name[0];
    }
    return "";
  };

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
            <S.ViewUserImgBox>
              <UsersSvg fill={theme.colors.background} />
            </S.ViewUserImgBox>
            <S.TextUserName>{getName()}</S.TextUserName>
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
          {user?.role === "admin" ? (
            <DrawerItem
              style={styles.drawerItem}
              activeBackgroundColor={theme.colors.primaryOpacity}
              inactiveBackgroundColor={theme.colors.background}
              focused={routerName[props.state.index] === "UsersStack"}
              onPress={() => props.navigation.navigate("UsersStack")}
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
          ) : null}
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
