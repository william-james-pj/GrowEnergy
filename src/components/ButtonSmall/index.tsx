import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

type ButtonSmallProps = {
  text: string;
  onPress: () => void;
};

export function ButtonSmall({ onPress, text }: ButtonSmallProps) {
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
