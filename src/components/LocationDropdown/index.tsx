import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, Modal, TouchableHighlight } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import LocationSVG from "../../assets/svg/Location.svg";
import ArrowSVG from "../../assets/svg/ArrowDropdown.svg";
import { useDarkMode } from "../../hooks/userDarkMode";

import * as S from "./styles";

export type DropdownDataType = {
  id: string;
  label: string;
  value: string;
};

type LocationDropdownProps = {
  data: DropdownDataType[];
  currentValue: DropdownDataType;
  onChange: (value: DropdownDataType) => void;
};

export function LocationDropdown({
  data,
  currentValue,
  onChange,
}: LocationDropdownProps) {
  const { theme } = useDarkMode();
  const [textSelected, setTextSelected] = useState(currentValue.label);
  const [isShow, setIsShow] = useState(false);

  const flatList = useRef<FlatList<DropdownDataType>>(null);

  const changeDate = (value: DropdownDataType) => {
    setTextSelected(value.label);
    setIsShow(false);
    onChange(value);
  };

  const renderRows = ({ item }: { item: DropdownDataType }) => {
    return (
      <S.ViewRow>
        <TouchableHighlight
          style={{ padding: 4, borderRadius: 4, marginBottom: 4 }}
          underlayColor="rgba(0,0,0,0.2)"
          onPress={() => changeDate(item)}
        >
          <S.TextItem>{item.label}</S.TextItem>
        </TouchableHighlight>
      </S.ViewRow>
    );
  };

  return (
    <>
      <S.ViewWrapper>
        <RectButton
          style={[styles.button, styles.border]}
          onPress={() => setIsShow(!isShow)}
        ></RectButton>
        <S.ViewTextContainer>
          <LocationSVG fill={theme.colors.disabled} />

          <S.TextValue>{textSelected}</S.TextValue>
        </S.ViewTextContainer>

        <ArrowSVG fill={theme.colors.disabled} />
      </S.ViewWrapper>
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <S.ViewModalContainer>
          <S.ViewModalBox>
            <S.ViewModalHeader>
              <S.TextModalHeader>Selecione um condomínio</S.TextModalHeader>
            </S.ViewModalHeader>
            <S.ViewModalContent>
              <FlatList
                ref={flatList}
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderRows}
                keyExtractor={(item) => item.id}
              />
            </S.ViewModalContent>
          </S.ViewModalBox>
        </S.ViewModalContainer>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  border: {
    borderRadius: 8,
  },
});
