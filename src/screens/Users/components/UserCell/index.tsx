import React from "react";
import { StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { useDarkMode } from "../../../../hooks/userDarkMode";

import EditSvg from "../../../../assets/svg/Edit.svg";

import * as S from "./styles";
import { UserType } from "../../../../@types/types";

type UserCellProps = {
  user: UserType;
};

export function UserCell({ user }: UserCellProps) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <S.TextName>{user.displayName}</S.TextName>

      <S.TextEmail>{user.email}</S.TextEmail>

      <S.ViewRule>
        <S.ViewRuleBox type={user.role === "admin"}>
          <S.TextRuleBoxText type={user.role === "admin"}>
            {user.role === "admin" ? "Admin" : "Síndico"}
          </S.TextRuleBoxText>
        </S.ViewRuleBox>
      </S.ViewRule>

      <S.ViewStatus>
        <S.ViewStatusBox active={!user.disabled}>
          <S.TextStatusBoxText active={!user.disabled}>
            {!user.disabled ? "Ativo" : "Inativo"}
          </S.TextStatusBoxText>
        </S.ViewStatusBox>
      </S.ViewStatus>

      <S.ViewOptions>
        <RectButton style={styles.button} onPress={() => {}}>
          <EditSvg fill={theme.colors.disabled} />
        </RectButton>
      </S.ViewOptions>
    </S.ViewWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 4,
    borderRadius: 8,
    zIndex: 9,
  },
});
