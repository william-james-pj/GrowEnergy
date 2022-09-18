import styled from "styled-components/native";
import { fonts } from "../../styles/fonts";

import BarMenuSvg from "../../assets/svg/BarMenu.svg";
import GoBackSvg from "../../assets/svg/GoBack.svg";

export const ViewContainer = styled.View`
  width: 100%;
  height: 35px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.View`
  height: 100%;
  left: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.normal};
  color: ${(props) => props.theme.colors.text};
`;

export const BarMenu = styled(BarMenuSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;

export const GoBack = styled(GoBackSvg).attrs((props) => ({
  fill: props.theme.colors.text,
}))``;
