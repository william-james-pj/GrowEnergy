import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { RuleSelecter } from "./components/RuleSelecter";
import { CondominiumTable } from "./components/CondominiumTable";
import { UserRule } from "../../constants/user";

import RecoverSVG from "../../assets/svg/Recover.svg";

import * as S from "./styles";
import { ButtonSmall } from "../../components/ButtonSmall";

export function AddUser() {
  const { theme } = useDarkMode();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);
  const [rule, setRule] = useState<UserRule>(UserRule.admin);

  const handleToggleStatus = () => {
    setStatus(!status);
  };

  const handleRule = (newValue: UserRule) => {
    setRule(newValue);
  };

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header title="Adicionar Usuário" back />

            <S.ViewForm>
              <S.TextInputLabel style={{ marginTop: 0 }}>Nome</S.TextInputLabel>
              <TextInput
                placeholder={"Nome"}
                onChangeText={setName}
                value={name}
                // validator={emailValidator}
                // setValidatedStatus={setValidatedStatus}
                errorText={""}
                keyboardType={"default"}
                heightBox={"40px"}
              />

              <S.TextInputLabel>E-mail</S.TextInputLabel>
              <TextInput
                placeholder={"E-mail"}
                onChangeText={setEmail}
                value={email}
                // validator={emailValidator}
                // setValidatedStatus={setValidatedStatus}
                errorText={"Por favor insira um endereço de e-mail válido"}
                keyboardType={"email-address"}
                heightBox={"40px"}
              />

              <S.ViewRowPassword>
                <S.TextInputLabel>Senha</S.TextInputLabel>
                <RectButton style={styles.recoverPassword} onPress={() => {}}>
                  <RecoverSVG fill={theme.colors.disabled} />
                  <S.TextRecoverPassword>Redefinir senha</S.TextRecoverPassword>
                </RectButton>
              </S.ViewRowPassword>

              <S.ViewRow>
                <S.ViewRule>
                  <S.TextInputLabel>Permissão do usuário</S.TextInputLabel>
                  <RuleSelecter radioButtons={rule} onPress={handleRule} />
                </S.ViewRule>

                <S.ViewStatus>
                  <S.TextInputLabel>Status</S.TextInputLabel>
                  <S.ViewToggleContainer>
                    <ToggleSwitch value={status} onPress={handleToggleStatus} />
                    <S.TextStatus>{status ? "Ativo" : "Inativo"}</S.TextStatus>
                  </S.ViewToggleContainer>
                </S.ViewStatus>
              </S.ViewRow>
            </S.ViewForm>

            <S.ViewLine />

            {rule === UserRule.trustee ? (
              <S.ViewCondominium>
                <S.ViewRow style={{ alignItems: "center", marginBottom: 16 }}>
                  <S.TextInputLabel style={{ marginTop: 0 }}>
                    Condomínios que o usuário tem acesso
                  </S.TextInputLabel>

                  <S.ViewButton>
                    <RectButton
                      style={styles.buttonAdd}
                      onPress={() => {}}
                    ></RectButton>
                    <S.TextButton>Conceder acesso</S.TextButton>
                  </S.ViewButton>
                </S.ViewRow>

                <CondominiumTable />
              </S.ViewCondominium>
            ) : (
              <S.TextIsAdmin>
                O usuário Admin tem acesso a todos os condomínios.
              </S.TextIsAdmin>
            )}

            <S.ViewLine />

            <S.ViewButtonContainer>
              <ButtonSmall text="Cancelar" type={false} onPress={() => {}} />
              <S.ViewSeparator />
              <ButtonSmall text="Salvar" onPress={() => {}} />
            </S.ViewButtonContainer>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </S.ViewWrapper>
  );
}

const styles = StyleSheet.create({
  recoverPassword: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    zIndex: 99,
  },
  buttonAdd: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 8,
    zIndex: 99,
  },
});
