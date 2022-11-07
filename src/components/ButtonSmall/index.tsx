import React from "react";

import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ButtonSmallProps = {
  text: string;
  onPress: () => void;
  type?: boolean;
};

export function ButtonSmall({ onPress, text, type = true }: ButtonSmallProps) {
  const styles = StyleSheet.create({
    button: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 8,
      zIndex: 99,
    },
  });

  return (
    <S.Wrapper isPrimary={type}>
      <RectButton style={styles.button} onPress={onPress}></RectButton>
      <S.Button>
        <S.Text isPrimary={type}>{text}</S.Text>
      </S.Button>
    </S.Wrapper>
  );
}
