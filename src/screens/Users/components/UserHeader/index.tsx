import React from "react";

import * as S from "./styles";

export function UserHeader() {
  return (
    <S.ViewWrapper>
      <S.TextName>Nome</S.TextName>

      <S.TextEmail>E-mail</S.TextEmail>

      <S.TextRule>Rule</S.TextRule>

      {/* <S.TextStatus>Status</S.TextStatus> */}

      <S.ViewOptions></S.ViewOptions>
    </S.ViewWrapper>
  );
}
