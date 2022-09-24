import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

import { useDarkMode } from "../../../../hooks/userDarkMode";

import ArrowLeftSVG from "./svg/ArrowLeft.svg";
import ArrowRightSVG from "./svg/ArrowRight.svg";
import CloseSVG from "./svg/Close.svg";

import { monthName } from "../../../../utils/monthName";
import { getMonthLongName } from "../../../../utils/getMonthName";

import * as S from "./styles";

type BoxMonthsProps = {
  onChange: (dateSelected: Date) => void;
  currentDateString: String;
  currentMonth: number;
  currentYear: number;
  close: () => void;
};

type BoxMonthProps = {
  oldValue: number;
  value: number;
  onChange: (value: number) => void;
};

export function BoxMonths({
  onChange,
  currentDateString,
  currentMonth,
  currentYear,
  close,
}: BoxMonthsProps) {
  const { theme } = useDarkMode();
  const [monthSelected, setMonthSelected] = useState(currentMonth);
  const [yearSelected, setYearSelected] = useState(currentYear);
  const [dateSelected, setDateSelected] = useState(currentDateString);

  const onChangeMonth = (value: number) => {
    let newDate = new Date(yearSelected, value, 1);
    setDateSelected(`${getMonthLongName(newDate)}, ${yearSelected}`);
    setMonthSelected(value);
    onChange(newDate);
  };

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextValueSelected>{dateSelected}</S.TextValueSelected>
        <RectButton
          style={{ padding: 4, borderRadius: 4 }}
          onPress={() => close()}
        >
          <CloseSVG fill={theme.colors.white} />
        </RectButton>
      </S.ViewHeader>
      <S.ViewContent>
        <S.Row>
          <RectButton
            style={{ padding: 4, borderRadius: 4 }}
            enabled={false}
            onPress={() => {}}
          >
            <ArrowLeftSVG fill={theme.colors.disabled} />
          </RectButton>
          <S.TextYear>2022</S.TextYear>
          <RectButton
            style={{ padding: 4, borderRadius: 4 }}
            enabled={false}
            onPress={() => {}}
          >
            <ArrowRightSVG fill={theme.colors.disabled} />
          </RectButton>
        </S.Row>

        <S.ViewMonths>
          <S.Row>
            <BoxMonth
              value={0}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={1}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={2}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
          </S.Row>
          <S.Row>
            <BoxMonth
              value={3}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={4}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={5}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
          </S.Row>
          <S.Row>
            <BoxMonth
              value={6}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={7}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={8}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
          </S.Row>
          <S.Row>
            <BoxMonth
              value={9}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={10}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
            <BoxMonth
              value={11}
              oldValue={monthSelected}
              onChange={onChangeMonth}
            />
          </S.Row>
        </S.ViewMonths>
      </S.ViewContent>
    </S.ViewWrapper>
  );
}

function BoxMonth({ oldValue, value, onChange }: BoxMonthProps) {
  return (
    <S.ViewMonth isSelected={value === oldValue}>
      <RectButton style={{ padding: 8 }} onPress={() => onChange(value)}>
        <S.TextMonth>{monthName[value]}</S.TextMonth>
      </RectButton>
    </S.ViewMonth>
  );
}
