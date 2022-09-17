import React from "react";

import { ButtonLarge } from "../../components/ButtonLarge";

import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";

export function Home() {
  const { logout } = useAuth();

  return (
    <S.Wrapper>
      <ButtonLarge
        onPress={() => {
          logout();
        }}
        text={"Iniciar"}
      />
    </S.Wrapper>
  );
}
