import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ToggleSwitchProps = {
  onPress: () => void;
  value: boolean;
  disabled?: boolean;
};

export function ToggleSwitch({
  onPress,
  value,
  disabled = false,
}: ToggleSwitchProps) {
  const styles = StyleSheet.create({
    shadowBox: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
  });

  const handleToggle = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <BorderlessButton
      onPress={() => {
        handleToggle();
      }}
    >
      <S.Wrapper style={styles.shadowBox} isActive={value}>
        <S.Circle></S.Circle>
      </S.Wrapper>
    </BorderlessButton>
  );
}
