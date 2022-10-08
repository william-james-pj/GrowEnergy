import React, { ReactNode } from "react";
import { BasicInfo } from "./components/BasicInfo";
import { CompleteInfo } from "./components/CompleteInfo";

import * as S from "./styles";

type Info = {
  title: string;
  value?: string;
  maxValue: string;
  minValue: string;
};

type ChartBoxProps = {
  title: string;
  date: string;
  firstInfo?: Info;
  secondInfo?: Info;
  isCompleteInfo: boolean;
  isOneInfo?: boolean;
  children?: ReactNode;
};

export function ChartBox(props: ChartBoxProps) {
  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextTitle>{props.title}</S.TextTitle>
        <S.TextDate>{props.date}</S.TextDate>
      </S.ViewHeader>

      {props.isCompleteInfo ? (
        <S.ViewInfo>
          <CompleteInfo
            title={props.firstInfo?.title ?? ""}
            value={props.firstInfo?.value ?? ""}
            maxValue={props.firstInfo?.maxValue ?? ""}
            minValue={props.firstInfo?.minValue ?? ""}
            isPrimary
          />

          {props.isOneInfo ? null : (
            <CompleteInfo
              title={props.secondInfo?.title ?? ""}
              value={props.secondInfo?.value ?? ""}
              maxValue={props.secondInfo?.maxValue ?? ""}
              minValue={props.secondInfo?.minValue ?? ""}
              isPrimary={false}
            />
          )}
        </S.ViewInfo>
      ) : (
        <S.ViewInfo>
          <BasicInfo
            title={props.firstInfo?.title ?? ""}
            maxValue={props.firstInfo?.maxValue ?? ""}
            minValue={props.firstInfo?.minValue ?? ""}
            isPrimary
          />
          {props.isOneInfo ? null : (
            <BasicInfo
              title={props.secondInfo?.title ?? ""}
              maxValue={props.secondInfo?.maxValue ?? ""}
              minValue={props.secondInfo?.minValue ?? ""}
              isPrimary={false}
            />
          )}
        </S.ViewInfo>
      )}
      <S.ViewChart>{props.children}</S.ViewChart>
    </S.ViewWrapper>
  );
}
