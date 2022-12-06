import React, { useRef, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { FlatList } from "react-native";
import { DevicesType } from "../../@types/types";

import { useDarkMode } from "../../hooks/userDarkMode";
import { useCondominiumSelected } from "../../hooks/useCondominiumSelected";
import { useCondominium } from "../../hooks/useCondominium";

import { Header } from "../../components/Header";
import { SeeConOverviewBox } from "./components/SeeConOverviewBox";
import { CardDevice } from "./components/CardDevice";
import { getDailyGenerationByStation } from "../../utils/generationsFunctions";

import NoDataSVG from "../../assets/svg/NoData.svg";

import * as S from "./styles";

export function SeeCondominium() {
  const { theme } = useDarkMode();
  const { generationThisMonth } = useCondominium();
  const { condominiumSelected } = useCondominiumSelected();

  const [allGeneration, setAllGeneration] = useState(0);

  const flatList = useRef<FlatList<DevicesType>>(null);

  const getGeneration = () => {
    let stations = condominiumSelected?.stations;

    if (stations === undefined) return;

    setAllGeneration(
      getDailyGenerationByStation(stations, generationThisMonth)
    );
  };

  useEffect(() => {
    getGeneration();

    return () => {};
  }, []);

  const renderRows = ({ item }: { item: DevicesType }) => {
    return <CardDevice station={item} />;
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
        <Header title={condominiumSelected?.name} back={true} />
        <S.TextSectionTitle>Overview</S.TextSectionTitle>
        <S.ViewRow>
          <SeeConOverviewBox title={"Geração total"} value={allGeneration} />
        </S.ViewRow>

        <S.TextSectionTitle>Dispositivios</S.TextSectionTitle>
        <FlatList
          ref={flatList}
          removeClippedSubviews={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          data={condominiumSelected?.stations}
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
