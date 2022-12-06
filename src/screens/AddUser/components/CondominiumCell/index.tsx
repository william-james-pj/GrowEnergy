import React from "react";
import { StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { useDarkMode } from "../../../../hooks/userDarkMode";

import TrashSvg from "../../../../assets/svg/Trash.svg";
import { CondominiumsType } from "../../../../@types/types";

import * as S from "./styles";

type CondominiumCellProps = {
  item: CondominiumsType;
  removePress: (condominium: CondominiumsType) => void;
};

export function CondominiumCell({ item, removePress }: CondominiumCellProps) {
  const { theme } = useDarkMode();

  return (
    <S.ViewWrapper style={styles.border}>
      <S.TextName>{item.name}</S.TextName>

      <S.ViewOptions>
        <RectButton style={styles.button} onPress={() => removePress(item)}>
          <TrashSvg fill={theme.colors.disabled} />
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
  border: {
    borderTopWidth: 1,
  },
});
