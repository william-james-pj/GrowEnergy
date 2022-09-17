import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonLarge } from "../../components/ButtonLarge";
import { TextInput } from "../../components/TextInput";

import { emailValidator } from "../../utils/emailValidator";

import * as S from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.WrapperBackgroud>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <S.Wrapper>
              <S.Header>
                <S.Title>Bem vindo de volta</S.Title>
                <S.SubTitle>
                  Você pode continuar de onde{"\n"}parou fazendo login.
                </S.SubTitle>
                <S.Form>
                  <TextInput
                    placeholder={"E-mail"}
                    onChangeText={setEmail}
                    value={email}
                    validator={emailValidator}
                    errorText={"Por favor insira um endereço de e-mail válido"}
                    keyboardType={"email-address"}
                  />
                  <TextInput
                    placeholder={"Senha"}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                  />
                  <S.TextFogot>Esqueceu a senha?</S.TextFogot>
                </S.Form>
                <ButtonLarge onPress={() => {}} text={"Entrar"} />
              </S.Header>
            </S.Wrapper>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </S.WrapperBackgroud>
  );
}
