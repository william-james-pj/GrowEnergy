import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { useDarkMode } from "../../hooks/userDarkMode";

import { RectButton } from "react-native-gesture-handler";
import { BoxMonths } from "./components/BoxMonth";

import { getMonthLongName, getMonthShortName } from "../../utils/getMonthName";

import ArrowSVG from "../../assets/svg/ArrowDropdown.svg";
import CalendarSVG from "../../assets/svg/Calendar.svg";

import * as S from "./styles";

type DateSelectorProps = {
  onChange: (dateSelected: Date) => void;
};

export function DateSelector({ onChange }: DateSelectorProps) {
  const { theme } = useDarkMode();
  const [date, setDate] = useState(new Date());
  const [isShow, setIsShow] = useState(false);

  const changeDate = (dateSelected: Date) => {
    setDate(dateSelected);
    setIsShow(false);
    onChange(dateSelected);
  };

  const getCurrentDate = (): string => {
    let monthName = getMonthLongName(date);

    return `${monthName}, ${date.getFullYear()}`;
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
          {`${getMonthShortName(date)} - ${date.getFullYear()}`}
        </S.TextValue>

        <ArrowSVG fill={theme.colors.disabled} />
      </S.ViewWrapper>

      {isShow && (
        <S.ViewModalContainer>
          <BoxMonths
            onChange={changeDate}
            currentDateString={getCurrentDate()}
            currentMonth={date.getMonth()}
            currentYear={date.getFullYear()}
            close={() => setIsShow(false)}
          />
        </S.ViewModalContainer>
      )}
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
