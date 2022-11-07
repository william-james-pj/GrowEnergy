import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, ToastAndroid } from "react-native";
import * as Clipboard from "expo-clipboard";

import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../hooks/useUser";
import { useDarkMode } from "../../hooks/userDarkMode";
import { useUserUpdate } from "../../hooks/useUserUpdate";

import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { RuleSelecter } from "./components/RuleSelecter";
import { CondominiumTable } from "./components/CondominiumTable";
import { ButtonSmall } from "../../components/ButtonSmall";
import { ConfirmModal } from "../../components/ConfirmModal";
import { Loading } from "../../components/Loading";

import { UserRule } from "../../constants/user";
import { generatePassword } from "../../utils/generatePassword";
import { emailValidator } from "../../utils/emailValidator";
import { DrawerScreenProps, NewUserType } from "../../@types/types";

import RecoverSVG from "../../assets/svg/Recover.svg";
import EyeSlashSVG from "../../assets/svg/Eye-slash.svg";
import EyeSVG from "../../assets/svg/Eye.svg";
import CopySVG from "../../assets/svg/Copy.svg";

import * as S from "./styles";

export function AddUser() {
  const { theme } = useDarkMode();
  const { isLoading, creatUser, updateUser } = useUser();
  const { getUser, clearUser } = useUserUpdate();
  const navigation = useNavigation<DrawerScreenProps>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [status, setStatus] = useState(true);
  const [rule, setRule] = useState<UserRule>(UserRule.admin);
  const [validatedStatus, setValidatedStatus] = useState(true);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isAllowedShowPassword, setIsAllowedShowPassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleStatus = () => {
    setStatus(!status);
  };

  const handleRule = (newValue: UserRule) => {
    setRule(newValue);
  };

  const passwordReset = () => {
    setPassword(generatePassword(8));
  };

  const showPassword = () => {
    if (!isAllowedShowPassword) {
      ToastAndroid.show("A senha não pode ser exibida", ToastAndroid.SHORT);
      return;
    }

    setIsShowPassword(!isShowPassword);
  };

  const copyToClipboard = async () => {
    if (!isAllowedShowPassword) {
      ToastAndroid.show("A senha não pode ser copiada", ToastAndroid.SHORT);
      return;
    }

    await Clipboard.setStringAsync(password);
    ToastAndroid.show("Senha copiada", ToastAndroid.SHORT);
  };

  const handlerButton = async () => {
    if (!isAllowedShowPassword) {
      // let value = getUser();
      // if (value !== undefined) await updateUser(value);
      closeModal();
      return;
    }

    await addUser();
  };

  const addUser = async () => {
    if (!email.trim().length || !password.trim().length || !name.trim().length)
      return;

    if (!validatedStatus) return;

    const newUser: NewUserType = {
      displayName: name,
      email: email,
      password: password,
      role: rule,
      disabled: !status,
    };

    await creatUser(newUser);
    ToastAndroid.show("Usuário adicionado", ToastAndroid.SHORT);
    closeModal();
  };

  const settingScreen = () => {
    let value = getUser();

    if (value === null) {
      return;
    }

    setName(value.displayName);
    setEmail(value.email);
    setPassword("password");
    setRule(value.role === "admin" ? UserRule.admin : UserRule.trustee);
    setStatus(!value.disabled);

    setIsAllowedShowPassword(false);
  };

  const closeModal = () => {
    clearUser();
    navigation.goBack();
  };

  useEffect(() => {
    // passwordReset();
    settingScreen();
    return () => {};
  }, []);

  if (isLoading) return <Loading />;

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
                errorText={""}
                keyboardType={"default"}
                heightBox={"40px"}
                disabled={!isAllowedShowPassword}
              />

              <S.TextInputLabel>E-mail</S.TextInputLabel>
              <TextInput
                placeholder={"E-mail"}
                onChangeText={setEmail}
                value={email}
                validator={emailValidator}
                setValidatedStatus={setValidatedStatus}
                errorText={"Por favor insira um endereço de e-mail válido"}
                keyboardType={"email-address"}
                heightBox={"40px"}
                disabled={!isAllowedShowPassword}
              />

              <S.ViewRowPassword>
                <S.TextInputLabel>Senha</S.TextInputLabel>
                <RectButton
                  style={styles.recoverPassword}
                  onPress={() => setModalVisible(true)}
                >
                  <RecoverSVG fill={theme.colors.disabled} />
                  <S.TextRecoverPassword>Redefinir senha</S.TextRecoverPassword>
                </RectButton>
              </S.ViewRowPassword>
              <S.ViewRowInput>
                <S.TextInputPassword
                  underlineColorAndroid="transparent"
                  value={password}
                  secureTextEntry={!isShowPassword}
                  keyboardType={"default"}
                  autoCapitalize={"none"}
                  editable={false}
                />
                <RectButton
                  style={[styles.buttonOptins, { marginRight: 16 }]}
                  onPress={showPassword}
                >
                  {!isShowPassword ? (
                    <EyeSlashSVG fill={theme.colors.disabled} />
                  ) : (
                    <EyeSVG fill={theme.colors.disabled} />
                  )}
                </RectButton>

                <RectButton
                  style={styles.buttonOptins}
                  onPress={copyToClipboard}
                >
                  <CopySVG fill={theme.colors.disabled} />
                </RectButton>
              </S.ViewRowInput>

              <S.ViewRow>
                <S.ViewRule>
                  <S.TextInputLabel>Permissão do usuário</S.TextInputLabel>
                  <RuleSelecter
                    radioButtons={rule}
                    onPress={handleRule}
                    disabled={!isAllowedShowPassword}
                  />
                </S.ViewRule>

                <S.ViewStatus>
                  <S.TextInputLabel>Status</S.TextInputLabel>
                  <S.ViewToggleContainer>
                    <ToggleSwitch
                      value={status}
                      onPress={handleToggleStatus}
                      disabled={!isAllowedShowPassword}
                    />
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
              <ButtonSmall text="Salvar" onPress={handlerButton} />
            </S.ViewButtonContainer>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ConfirmModal
          title="Você tem certeza?"
          description="Você realmente quer redefinir a senha deste usuário?"
          buttonTitle="Redefinir"
          onClose={() => setModalVisible(false)}
          onPress={() => {
            passwordReset();
            setModalVisible(false);
          }}
        />
      </Modal>
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
  buttonOptins: {
    padding: 4,
    borderRadius: 8,
    zIndex: 99,
  },
});
