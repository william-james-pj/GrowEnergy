import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FlatList } from "react-native";
import { CondominiumsType } from "../../@types/types";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { CardCondominiums } from "./components/CardCondominiums";

import NoDataSVG from "../../assets/svg/NoData.svg";

import * as S from "./styles";

export function Condominiums() {
  const { theme } = useDarkMode();
  const data: CondominiumsType[] = [{ id: "1" }, { id: "2" }];

  const flatList = useRef<FlatList<CondominiumsType>>(null);

  const renderRows = ({ item }: { item: CondominiumsType }) => {
    return <CardCondominiums />;
  };

  const listEmpty = () => {
    return (
      <S.EmptyContainer>
        <NoDataSVG fill={theme.colors.primary} />
        <S.EmptyTitle>{"Nenhum condomínio encontrado!"}</S.EmptyTitle>
        <S.EmptySubTitle>{"Solicite acesso ao seu condomínio"}</S.EmptySubTitle>
      </S.EmptyContainer>
    );
  };

  return (
    <S.ViewWrapper>
      <SafeAreaView>
        <Header title="Condomínios" />
        <FlatList
          ref={flatList}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={data}
          renderItem={renderRows}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          ListFooterComponent={() => <S.FooterView></S.FooterView>}
          ListEmptyComponent={listEmpty}
          style={{ marginTop: 32 }}
        />
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
