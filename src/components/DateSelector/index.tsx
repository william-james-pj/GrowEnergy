import React, { useState } from "react";
import { StyleSheet, Modal } from "react-native";

import { useDarkMode } from "../../hooks/userDarkMode";

import { RectButton } from "react-native-gesture-handler";
import { BoxMonths } from "./components/BoxMonth";

import { getMonthLongName, getMonthShortName } from "../../utils/getMonthName";

import ArrowSVG from "../../assets/svg/ArrowDropdown.svg";
import CalendarSVG from "../../assets/svg/Calendar.svg";

import * as S from "./styles";

type DateSelectorProps = {
  onChange: (dateSelected: Date) => void;
  currentDate: Date;
};

export function DateSelector({ onChange, currentDate }: DateSelectorProps) {
  const { theme } = useDarkMode();
  const [isShow, setIsShow] = useState(false);

  const changeDate = (dateSelected: Date) => {
    setIsShow(false);
    onChange(dateSelected);
  };

  const getCurrentDate = (): string => {
    let monthName = getMonthLongName(currentDate);

    return `${monthName}, ${currentDate.getFullYear()}`;
  };

  return (
    <>
      <S.ViewWrapper>
        <RectButton
          style={styles.button}
          onPress={() => setIsShow(!isShow)}
        ></RectButton>

        <CalendarSVG fill={theme.colors.disabled} />

        <S.TextValue>
          {`${getMonthShortName(currentDate)} - ${currentDate.getFullYear()}`}
        </S.TextValue>

        <ArrowSVG fill={theme.colors.disabled} />
      </S.ViewWrapper>
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <S.ViewModalContainer>
          <BoxMonths
            onChange={changeDate}
            currentDateString={getCurrentDate()}
            currentMonth={currentDate.getMonth()}
            currentYear={currentDate.getFullYear()}
            close={() => setIsShow(false)}
          />
        </S.ViewModalContainer>
      </Modal>

      {/* {isShow && (
        
      )} */}
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
    borderRadius: 8,
    zIndex: 999,
  },
});
