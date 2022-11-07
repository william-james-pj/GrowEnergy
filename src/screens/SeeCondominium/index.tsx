import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FlatList } from "react-native";
import { DevicesType } from "../../@types/types";

import { useDarkMode } from "../../hooks/userDarkMode";

import { Header } from "../../components/Header";
import { SeeConOverviewBox } from "./components/SeeConOverviewBox";
import { CardDevice } from "./components/CardDevice";

import NoDataSVG from "../../assets/svg/NoData.svg";

import * as S from "./styles";

export function SeeCondominium() {
  const { theme } = useDarkMode();
  const data: DevicesType[] = [{ id: "1" }, { id: "2" }];

  const flatList = useRef<FlatList<DevicesType>>(null);

  const renderRows = ({ item }: { item: DevicesType }) => {
    return <CardDevice />;
  };

  const listEmpty = () => {
    return (
      <S.EmptyContainer>
        <NoDataSVG fill={theme.colors.primary} />
        <S.EmptyTitle>{"Nenhum dispositivo encontrado!"}</S.EmptyTitle>
        <S.EmptySubTitle>{"Adicione um novo dispositivo"}</S.EmptySubTitle>
      </S.EmptyContainer>
    );
  };

  return (
    <S.ViewWrapper>
      <SafeAreaView>
        <Header title="Condomínio 1" back={true} />
        <S.TextSectionTitle>Overview</S.TextSectionTitle>
        <S.ViewRow>
          <SeeConOverviewBox title={"Geração total"} value={20.14} />
        </S.ViewRow>

        <S.TextSectionTitle>Dispositivios</S.TextSectionTitle>
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
        />
      </SafeAreaView>
    </S.ViewWrapper>
  );
}
