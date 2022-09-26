import React from "react";
import { StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { useDarkMode } from "../../../../hooks/userDarkMode";

import EditSvg from "../../../../assets/svg/Edit.svg";

import * as S from "./styles";

export function UserCell() {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper>
      <S.TextName>Admin</S.TextName>

      <S.TextEmail>admin@app.com</S.TextEmail>

      <S.ViewRule>
        <S.ViewRuleBox type={true}>
          <S.TextRuleBoxText type={true}>Admin</S.TextRuleBoxText>
        </S.ViewRuleBox>
      </S.ViewRule>

      <S.ViewStatus>
        <S.ViewStatusBox active={true}>
          <S.TextStatusBoxText active={true}>Ativo</S.TextStatusBoxText>
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
