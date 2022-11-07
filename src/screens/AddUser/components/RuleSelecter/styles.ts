import styled from "styled-components/native";
import { fonts } from "../../../../styles/fonts";

type SelectedProps = {
  selected: boolean;
};

export const ViewWrapper = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewRadio = styled.View<SelectedProps>`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.disabled};
`;

export const ViewBall = styled.View<SelectedProps>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.disabled};
  width: 10px;
  height: 10px;
  border-radius: 10px;
`;

export const TextLabel = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};
  margin-left: 8px;
`;
