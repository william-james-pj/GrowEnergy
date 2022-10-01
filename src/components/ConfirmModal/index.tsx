import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import * as S from "./styles";

type ConfirmModalProps = {
  title: string;
  description: string;
  buttonTitle: string;
  onClose: () => void;
  onPress: () => void;
};

export function ConfirmModal({
  title,
  description,
  buttonTitle,
  onClose,
  onPress,
}: ConfirmModalProps) {
  return (
    <S.ViewWrapper>
      <S.ViewBox>
        <S.TextTitle>{title}</S.TextTitle>
        <S.TextDescription>{description}</S.TextDescription>
        <S.ViewButtonContainer>
          <S.Button>
            <TouchableOpacity style={styles.button} onPress={onClose} />
            <S.Text>Cancelar</S.Text>
          </S.Button>

          <S.Button isPrimary>
            <TouchableOpacity style={styles.button} onPress={onPress} />
            <S.Text isPrimary>{buttonTitle}</S.Text>
          </S.Button>
        </S.ViewButtonContainer>
      </S.ViewBox>
    </S.ViewWrapper>
  );
}

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
