import React, { useRef, useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { CondominiumsType } from "../../../../@types/types";
import { LoadingChart } from "../../../../components/LoadingChart";
import { useCondominium } from "../../../../hooks/useCondominium";

import * as S from "./styles";

type ConfirmModalProps = {
  onClose: () => void;
  onPress: (condominium: CondominiumsType) => void;
};

export function SelectCondominiumModal({
  onClose,
  onPress,
}: ConfirmModalProps) {
  const { getAllCondominium } = useCondominium();
  const flatList = useRef<FlatList<CondominiumsType>>(null);

  const [condominium, setCondominium] = useState<CondominiumsType[]>([]);

  const closeButton = () => onClose();

  const addAccess = (item: CondominiumsType) => {
    onPress(item);
  };

  const renderRows = ({ item }: { item: CondominiumsType }) => {
    return (
      <S.ViewRow>
        <TouchableHighlight
          style={{ padding: 4, borderRadius: 4, marginBottom: 4 }}
          underlayColor="rgba(0,0,0,0.2)"
          onPress={() => {
            addAccess(item);
          }}
        >
          <S.TextItem>{item.name}</S.TextItem>
        </TouchableHighlight>
      </S.ViewRow>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      let all = await getAllCondominium();
      setCondominium(all);
    };

    fetchData().catch(console.error);
    return () => {};
  }, []);

  return (
    <S.ViewWrapper>
      <S.ViewBox>
        <S.TextTitle>Selecione um condomínios</S.TextTitle>
        <S.ViewFlex>
          {condominium.length === 0 ? (
            <LoadingChart />
          ) : (
            <FlatList
              ref={flatList}
              removeClippedSubviews={false}
              showsVerticalScrollIndicator={false}
              data={condominium}
              renderItem={renderRows}
              keyExtractor={(item) => item.id}
            />
          )}
        </S.ViewFlex>
        <S.Button>
          <TouchableOpacity style={styles.button} onPress={closeButton} />
          <S.Text>{"Cancelar"}</S.Text>
        </S.Button>
      </S.ViewBox>
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
