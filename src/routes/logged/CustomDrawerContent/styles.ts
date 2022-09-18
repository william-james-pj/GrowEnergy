import styled from "styled-components/native";
import { fonts } from "../../../styles/fonts";

type RouterNameProps = {
  isActive: boolean;
};

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 40px 16px 32px 16px;
`;

export const ViewHeader = styled.View`
  display: flex;
`;

export const ViewUserRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewUserInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ViewUserImgBox = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.disabled};
`;

export const TextUserName = styled.Text`
  margin-left: 8px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
`;

export const ViewContent = styled.View`
  display: flex;
  margin-top: 32px;
`;

export const TextRouterName = styled.Text<RouterNameProps>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.text : props.theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
`;

export const ViewIconMenu = styled.View`
  margin-left: 16px;
  margin-right: -16px;
`;

export const ViewFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextLogOut = styled.Text`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text700};
`;
