import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ButtonLargeProps = {
  text: string;
  onPress: () => void;
};

export function ButtonLarge({ onPress, text }: ButtonLargeProps) {
  return (
    <S.Wrapper>
      <RectButton onPress={onPress}>
        <S.Button>
          <S.Text>{text}</S.Text>
        </S.Button>
      </RectButton>
    </S.Wrapper>
  );
}
