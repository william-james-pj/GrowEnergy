import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { UserRule } from "../../../../constants/user";

import * as S from "./styles";

type RuleSelecterProps = {
  onPress: (newValue: UserRule) => void;
  radioButtons: UserRule;
  disabled?: boolean;
};

export function RuleSelecter({
  radioButtons,
  onPress,
  disabled = false,
}: RuleSelecterProps) {
  const handleClick = (oldValue: UserRule) => {
    if (disabled) return;

    if (oldValue === UserRule.admin) {
      onPress(UserRule.admin);
      return;
    }
    onPress(UserRule.trustee);
  };

  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <BorderlessButton onPress={() => handleClick(UserRule.admin)}>
          <S.ViewRadio selected={radioButtons === UserRule.admin}>
            <S.ViewBall selected={radioButtons === UserRule.admin}></S.ViewBall>
          </S.ViewRadio>
        </BorderlessButton>
        <S.TextLabel>Admin</S.TextLabel>
      </S.ViewRow>

      <S.ViewRow style={{ marginLeft: 24 }}>
        <BorderlessButton onPress={() => handleClick(UserRule.trustee)}>
          <S.ViewRadio selected={radioButtons === UserRule.trustee}>
            <S.ViewBall
              selected={radioButtons === UserRule.trustee}
            ></S.ViewBall>
          </S.ViewRadio>
        </BorderlessButton>
        <S.TextLabel>Síndico</S.TextLabel>
      </S.ViewRow>
    </S.ViewWrapper>
  );
}
