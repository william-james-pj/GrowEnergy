import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { UsersNavigationProp } from "../../@types/types";

import { FlatList, RectButton } from "react-native-gesture-handler";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { UserHeader } from "./components/UserHeader";
import { UserCell } from "./components/UserCell";

import { UserType } from "../../@types/types";

import * as S from "./styles";

export function Users() {
  const { theme } = useDarkMode();
  const navigation = useNavigation<UsersNavigationProp>();

  const data: UserType[] = [{ id: "1" }, { id: "2" }];
  const flatList = useRef<FlatList<UserType>>(null);

  const renderRows = ({ item }: { item: UserType }) => {
    return <UserCell />;
  };

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Usuários" />
        <S.ViewRow>
          <S.TextTitle>Todos os usuários</S.TextTitle>
          <S.ViewButton>
            <RectButton
              style={styles.button}
              onPress={() => navigation.navigate("AddUser")}
            ></RectButton>
            <S.TextButton>Adicionar usuário</S.TextButton>
          </S.ViewButton>
        </S.ViewRow>

        <FlatList
          style={{ flex: 1 }}
          ref={flatList}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          ListHeaderComponent={() => <UserHeader />}
          ListHeaderComponentStyle={{
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.disabled,
          }}
        />
      </SafeAreaView>
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
