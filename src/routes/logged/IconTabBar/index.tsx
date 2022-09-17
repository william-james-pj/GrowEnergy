import React from "react";

import HomeSVG from "../../../assets/svg/Home.svg";
import DashboardSVG from "../../../assets/svg/Dashboard.svg";
import CondominiumsSVG from "../../../assets/svg/Condominiums.svg";

import { useTheme } from "styled-components";

import * as S from "./styles";

interface IconTabBarProps {
  focused: boolean;
  icon: "Home" | "Dashboard" | "Condominiums";
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  const theme = useTheme();

  return (
    <S.Icon active={focused}>
      {icon === "Home" ? (
        <HomeSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : icon === "Dashboard" ? (
        <DashboardSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      ) : (
        <CondominiumsSVG
          fill={focused ? theme.colors.primary : theme.colors.disabled}
        />
      )}
    </S.Icon>
  );
}
